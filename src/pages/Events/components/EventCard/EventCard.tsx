import React from 'react';
import { Button, FlexBox, FloatingPlayButton } from '../../../../components';
import { useAccordian, useEvent } from '../../../../hooks';
import { DiceEvent } from '../../../../types/events';

import EventImage from '../EventImage';
import { MoreInfo } from '../MoreInfo';
import OnSaleIndicator from '../OnSaleIndicator';

import TicketCostSummary from '../TicketCostSummary';

const EventCard = (props: { diceEvent: DiceEvent }) => {
  const { diceEvent } = props;
  const accordian = useAccordian(false);

  const {
    eventOnSaleString,
    cheapestTicketTotalString,
    hasMultipleTicketTypes,
    isOnSale,
    formattedEventDate,
    hasTracks,
    buttonString,
    handleButtonClick,
  } = useEvent(diceEvent);

  return (
    <FlexBox flexDirection='column' width={'100%'} gap={8} marginBottom={32}>
      <FlexBox position='relative'>
        {hasTracks && <FloatingPlayButton />}
        <OnSaleIndicator
          isOnSale={isOnSale}
          eventOnSaleString={eventOnSaleString}
        />

        {/* Design seems to call for the landscape image when the more info is expanded
        this feels a bit glitchy in the app as the images load quite slowly causing a jump */}
        <EventImage
          variant={accordian.collapsed ? 'landscape' : 'square'}
          eventImages={diceEvent.event_images}
        />
      </FlexBox>
      <FlexBox flexDirection='column' marginBottom={8} gap={16}>
        <p>{formattedEventDate}</p>
        <h2>{diceEvent.name}</h2>
        <div>
          <h5>{diceEvent.venue}</h5>
          <h6>
            {diceEvent.location.city}, {diceEvent.location.country}
          </h6>
        </div>
      </FlexBox>
      <MoreInfo diceEvent={diceEvent} accordian={accordian} />

      <FlexBox
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Button onClick={handleButtonClick}>{buttonString}</Button>
        <TicketCostSummary
          hasMultipleTicketTypes={hasMultipleTicketTypes}
          cheapestTicketTotalString={cheapestTicketTotalString}
        />
      </FlexBox>
    </FlexBox>
  );
};

export default React.memo(EventCard);
