import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

export type PageColumnsProps<DataType> = {
  gap?: number;
  direction?: 'column' | 'row';
  justifyContent?: CSSProperties['justifyContent'];
  items: DataType[];
  renderItem: (item: DataType, index: number) => ReactNode;
  mediaQueries?: string[];
  columnNumbers?: number[];
  defaultColumn?: number;
};
