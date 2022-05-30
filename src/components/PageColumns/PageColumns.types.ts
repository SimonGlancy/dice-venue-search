import { ReactNode, RefObject } from "react";
import { CSSProperties } from "styled-components";

export type PageColumnsProps<DataType> = {
  gap?: number;
  direction?: "column" | "row";
  justifyContent?: CSSProperties["justifyContent"];
  items: DataType[];
  renderItem: (item: DataType, index: number, columnWidth: number) => ReactNode;
  mediaQueries?: string[];
  columnNumbers?: number[];
  defaultColumn?: number;
  pageRef: RefObject<HTMLDivElement>;
  virtualised?: boolean;
  columnGap?: number; // space between columns (as multiple of base unit) i.e 16px = 2
};
