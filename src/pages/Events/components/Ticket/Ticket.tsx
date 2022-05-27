import React from 'react';
import { FlexBox } from '../../../../components';
import { styled } from '../../../../theme';
import { TicketType } from '../../../../types/events';
import { formatMoneyInteger } from '../../../../utils';

export type TicketProps = {
  ticket: TicketType;
  soldOutString?: string;
};

const SOLD_OUT = 'SOLD OUT';
const FREE = 'Free';

const SoldOutText = styled.strong(
  ({ theme }) => `
  margin-left: ${theme.spacing(1)}px;
  opacity: 0.5
`
);

const Ticket = (props: TicketProps) => {
  const { ticket, soldOutString = SOLD_OUT } = props;
  return (
    <FlexBox flexDirection='row' justifyContent='space-between'>
      <span>
        {ticket.name} —{' '}
        <strong>
          {ticket.price.total ? formatMoneyInteger(ticket.price.total) : FREE}
        </strong>
      </span>
      {ticket.sold_out && <SoldOutText>{soldOutString}</SoldOutText>}
    </FlexBox>
  );
};

export default Ticket;
