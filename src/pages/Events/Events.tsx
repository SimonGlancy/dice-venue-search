import React, { useCallback, useMemo } from 'react';
import { Button, FlexBox, PageColumns, ResponsivePage } from '../../components';
import { useEventSearchContext } from '../../context';

import { DiceEvent } from '../../types/events';

import { EventCard } from './components';

export type EventsPageProps = {
  events?: DiceEvent[];
  title?: string;
  emptyTitle?: string;
  getMore?: () => void;
  isLoading?: boolean;
};

export const EVENTS_PAGE_TITLE = 'Events at venue';
export const EVENTS_EMPTY_PAGE_TITLE = 'No venues matching that search';
export const LOAD_MORE = 'LOAD MORE';
export const LOADING_MORE = 'LOADING MORE ...';
export const LOADING = 'Loading ...';

const EventsPage = (props: EventsPageProps) => {
  const { title = EVENTS_PAGE_TITLE, emptyTitle = EVENTS_EMPTY_PAGE_TITLE } =
    props;

  const { data: events = [], getMore, isLoading } = useEventSearchContext();

  const pageTitle = useMemo(() => {
    if (isLoading && !events.length) {
      return LOADING;
    }
    return events?.length ? title : emptyTitle;
  }, [events, isLoading]);

  const renderItem = useCallback(
    (diceEvent: DiceEvent) => (
      <EventCard key={diceEvent.id} diceEvent={diceEvent} />
    ),
    [events]
  );

  return (
    <ResponsivePage title={pageTitle}>
      {/* I Would want to virtualise the rendering here as doesn't seem performant */}
      {/* this looks promising https://react-virtual.tanstack.com/examples/variable */}
      <PageColumns items={events} renderItem={renderItem} gap={32} />

      {!!events.length && (
        <FlexBox justifyContent='center' padding={32}>
          <Button colorVariant={'appSurfaceContrast'} onClick={getMore}>
            {isLoading ? LOADING_MORE : LOAD_MORE}
          </Button>
        </FlexBox>
      )}
    </ResponsivePage>
  );
};

export default EventsPage;
