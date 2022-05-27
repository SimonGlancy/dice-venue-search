import React, { useCallback, useMemo } from "react";
import { Button, FlexBox, PageColumns, ResponsivePage } from "../../components";

import { DiceEvent } from "../../types/events";

import { EventCard } from "./components";

export type EventsPageProps = {
  events?: DiceEvent[];
  title?: string;
  emptyTitle?: string;
  getMore?: () => void;
  isLoading?: boolean;
};

export const EVENTS_PAGE_TITLE = "Events at venue";
export const EVENTS_EMPTY_PAGE_TITLE = "No venues matching that search";
export const LOAD_MORE = "LOAD MORE";
export const LOADING_MORE = "LOADING MORE ...";

const EventsPage = (props: EventsPageProps) => {
  const {
    events = [],
    title = EVENTS_PAGE_TITLE,
    emptyTitle = EVENTS_EMPTY_PAGE_TITLE,
    getMore,
    isLoading,
  } = props;
  const pageTitle = useMemo(
    () => (events?.length ? title : emptyTitle),
    [events]
  );

  const renderItem = useCallback(
    (diceEvent: DiceEvent) => <EventCard diceEvent={diceEvent} />,
    [events]
  );

  return (
    <ResponsivePage title={pageTitle}>
      {/* I Would want to virtualise the rendering here as deosn't seem performant */}
      {/* this looks promising https://react-virtual.tanstack.com/examples/variable */}
      <PageColumns items={events} renderItem={renderItem} gap={32} />

      {!!events.length && (
        <FlexBox justifyContent="center" padding={32}>
          <Button colorVariant={"appSurfaceContrast"} onClick={getMore}>
            {isLoading ? LOADING_MORE : LOAD_MORE}
          </Button>
        </FlexBox>
      )}
    </ResponsivePage>
  );
};

export default EventsPage;
