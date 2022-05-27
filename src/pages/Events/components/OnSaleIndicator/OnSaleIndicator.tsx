import { FloatingOnSaleIndicator } from "./OnSaleIndicator.style";

export type OnSaleIndicatorProps = {
  eventOnSaleString: string;
  isOnSale?: boolean;
};

const OnSaleIndicator = (props: OnSaleIndicatorProps) => {
  const { eventOnSaleString, isOnSale } = props;

  return !isOnSale ? (
    <FloatingOnSaleIndicator>{eventOnSaleString}</FloatingOnSaleIndicator>
  ) : null;
};

export default OnSaleIndicator;
