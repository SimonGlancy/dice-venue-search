import { ReactNode, RefObject } from "react";

export type VirtualColumnProps<DataType> = {
  pageRef: RefObject<HTMLDivElement>;
  items: DataType[];
  renderItem: (item: DataType, index: number, columnWidth: number) => ReactNode;
  columnWidth: number;
  overscan?: number;
};
