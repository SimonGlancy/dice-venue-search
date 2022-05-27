import React, { ReactNode, useCallback, useMemo } from "react";
import {
  Accordian,
  Button,
  FlexBox,
  FloatingPlayButton,
} from "../../../../components";
import { useAccordian } from "../../../../hooks";
import { DiceEvent, TicketType } from "../../../../types/events";
import {
  dateIsInTheFuture,
  formatCurfewTime,
  formatEventTime,
  formatMoneyInteger,
} from "../../../../utils";
import EventImage from "../EventImage";
import { MoreInfo } from "../MoreInfo";
import OnSaleIndicator from "../OnSaleIndicator";

import TicketCostSummary from "../TicketCostSummary";

const ON_SALE = "On Sale";
const BUY_NOW = "BUY NOW";
const GET_REMINDED = "GET REMINDED";

const useEvent = (diceEvent: DiceEvent) => {
  const eventOnSaleString = useMemo(
    () => `${ON_SALE} ${formatEventTime(diceEvent.sale_start_date)}`,
    [diceEvent]
  );

  const hasMultipleTicketTypes = useMemo(
    () => diceEvent.ticket_types.length > 1,
    [diceEvent.ticket_types]
  );

  const cheapestTicket = useMemo(
    () =>
      diceEvent.ticket_types.reduce<TicketType>((acc, curr) => {
        if (curr.price.total < acc.price.total) {
          return curr;
        }
        return acc;
      }, diceEvent.ticket_types[0]),
    [diceEvent.ticket_types]
  );

  const cheapestTicketTotalString = useMemo(
    () => formatMoneyInteger(cheapestTicket.price.total),
    [cheapestTicket]
  );

  const isOnSale = useMemo(
    () => !dateIsInTheFuture(diceEvent.sale_start_date),
    [diceEvent.sale_start_date]
  );

  const formattedEventDate = useMemo(
    () => formatEventTime(diceEvent.date),
    [diceEvent.date]
  );

  const hasTracks = useMemo(
    () => !!diceEvent.apple_music_tracks.length,
    [!!diceEvent.apple_music_tracks.length]
  );

  const buttonString = useMemo(
    () => (isOnSale ? BUY_NOW : GET_REMINDED),
    [isOnSale]
  );

  const handleButtonClick = useCallback(() => {
    if (isOnSale) {
      return alert(`${BUY_NOW} - ${diceEvent.name}`);
    }
    return alert(`${GET_REMINDED} - ${diceEvent.name}`);
  }, [isOnSale]);

  return {
    eventOnSaleString,
    cheapestTicket,
    cheapestTicketTotalString,
    hasMultipleTicketTypes,
    isOnSale,
    formattedEventDate,
    hasTracks,
    buttonString,
    handleButtonClick,
  };
};

const EventCard = (props: { diceEvent: DiceEvent }) => {
  const { diceEvent } = props;
  const accordian = useAccordian(false);

  // experimenting doing responsiveness in js
  const cardWidth = useMemo(() => 320, []);

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
    <FlexBox flexDirection="column" width={"100%"} gap={8} marginBottom={32}>
      <FlexBox position="relative">
        {hasTracks && <FloatingPlayButton />}
        <OnSaleIndicator
          isOnSale={isOnSale}
          eventOnSaleString={eventOnSaleString}
        />

        {/* Design seems to call for the landscape image when the more info is expanded
        this feels a bit glitchy in the app as the images load quite slowly causing a jump */}
        <EventImage
          variant={accordian.collapsed ? "landscape" : "square"}
          eventImages={diceEvent.event_images}
        />
      </FlexBox>
      <FlexBox flexDirection="column" marginBottom={8} gap={16}>
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
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
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
