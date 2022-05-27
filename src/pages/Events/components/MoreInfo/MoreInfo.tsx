import React from 'react';
import { Accordian, ColumnList, FlexBox } from '../../../../components';
import { AccordianProps } from '../../../../components/Accordian/Accordian';
import { DiceEvent } from '../../../../types/events';
import { formatCurfewTime } from '../../../../utils';
import Ticket from '../Ticket';

export type MoreInfoProps = {
  diceEvent: DiceEvent;
  title?: string;
  accordian: AccordianProps;
  lineUpTitle?: string;
  ticketsTitle?: string;
};

const MORE_INFO = 'More info';
const LESS_INFO = 'Less info';
const CURFEW = 'Curfew — ';
const LINE_UP = 'LINE UP';
const TICKETS = 'TICKETS';

type CurfewProps = {
  time: string;
  curfewString?: string;
};

const Curfew = (props: CurfewProps) => {
  const { curfewString = CURFEW, time } = props;
  return (
    <p>
      {curfewString}
      <strong> {formatCurfewTime(time)}</strong>
    </p>
  );
};

const MoreInfo = (props: MoreInfoProps) => {
  const {
    diceEvent,
    accordian,
    title = accordian.collapsed ? LESS_INFO : MORE_INFO,
    lineUpTitle = LINE_UP,
    ticketsTitle = TICKETS,
  } = props;

  return (
    <Accordian {...accordian} title={title}>
      <FlexBox flexDirection='column' gap={16}>
        <p>{diceEvent.description}</p>

        {!!diceEvent.artists.length && (
          <ColumnList
            title={lineUpTitle}
            items={diceEvent.artists}
            renderItem={(artist) => <span>{artist}</span>}
          />
        )}
        <Curfew time={diceEvent.date_end} />

        <ColumnList
          title={ticketsTitle}
          items={diceEvent.ticket_types}
          renderItem={(ticket) => <Ticket ticket={ticket} />}
        />
      </FlexBox>
    </Accordian>
  );
};

export default MoreInfo;
