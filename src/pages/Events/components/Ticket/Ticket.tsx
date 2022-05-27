import React from "react";
import { styled } from "../../../../theme";
import { TicketType } from "../../../../types/events";
import { formatMoneyInteger } from "../../../../utils";

export type TicketProps = {
  ticket: TicketType;
  soldOutString?: string;
};

const SOLD_OUT = "SOLD OUT";

const SoldOutText = styled.strong(
  ({ theme }) => `
  margin-left: ${theme.spacing(1)}px;
  opacity: 0.5
`
);

const Ticket = (props: TicketProps) => {
  const { ticket, soldOutString = SOLD_OUT } = props;
  return (
    <span>
      {ticket.name} —<strong> {formatMoneyInteger(ticket.price.total)}</strong>
      {ticket.sold_out && <SoldOutText>{soldOutString}</SoldOutText>}
    </span>
  );
};

export default Ticket;
