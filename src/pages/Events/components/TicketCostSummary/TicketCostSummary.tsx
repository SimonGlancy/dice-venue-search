import React from "react";
import { FlexBox } from "../../../../components";

export type TicketCostSummaryProps = {
  hasMultipleTicketTypes: boolean;
  cheapestTicketTotalString: string;
  from?: string;
};

const FROM = "From";

const TicketCostSummary = (props: TicketCostSummaryProps) => {
  const {
    hasMultipleTicketTypes,
    cheapestTicketTotalString,
    from = FROM,
  } = props;
  return (
    <FlexBox display="flex" flexDirection="column" alignItems="center">
      {hasMultipleTicketTypes && <span>{from}</span>}
      <h3>{cheapestTicketTotalString}</h3>
    </FlexBox>
  );
};

export default TicketCostSummary;
