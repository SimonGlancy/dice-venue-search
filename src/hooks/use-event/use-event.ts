import { useCallback, useMemo } from 'react';
import { DiceEvent, TicketType } from '../../types/events';
import {
  dateIsInTheFuture,
  formatEventTime,
  formatMoneyInteger,
} from '../../utils';

const ON_SALE = 'On Sale';
const BUY_NOW = 'BUY NOW';
const GET_REMINDED = 'GET REMINDED';
const FREE = 'Free';

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
    () =>
      !!cheapestTicket.price.total
        ? formatMoneyInteger(cheapestTicket.price.total)
        : FREE,
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

export default useEvent;
