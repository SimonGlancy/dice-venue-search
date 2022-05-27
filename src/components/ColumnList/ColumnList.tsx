import React, { ReactNode } from "react";
import { styled } from "../../theme";
import FlexBox from "../FlexBox";

export type ColumnListProps<DataType> = {
  items: DataType[];
  renderItem: (item: DataType, index: number) => ReactNode;
  title: string;
};

const ColumnListTitle = styled.p(
  ({ theme }) => `
  color: ${theme.palette.primary}
`
);

const ColumnList = <DataType,>(props: ColumnListProps<DataType>) => {
  const { title, items, renderItem } = props;
  return (
    <FlexBox flexDirection="column" gap={4}>
      {title && <ColumnListTitle>{title}</ColumnListTitle>}
      {items.map(renderItem)}
    </FlexBox>
  );
};

export default ColumnList;
