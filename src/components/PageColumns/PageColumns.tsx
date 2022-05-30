import { PropsWithChildren, useCallback } from "react";

import { useColumniseData, useColumnWidthMeasurer } from "../../hooks";

import FlexBox from "../FlexBox";
import VirtualColumn from "../VirtualColumn";
import { PageColumnsContainer } from "./PageColumns.style";
import { PageColumnsProps } from "./PageColumns.types";

const PageColumns = <DataType,>(
  props: PropsWithChildren<PageColumnsProps<DataType>>
) => {
  const {
    children,
    items,
    renderItem,
    mediaQueries = [
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 560px)",
    ],
    columnNumbers = [3, 3, 2],
    defaultColumn = 1,
    pageRef,

    virtualised = true,
    ...rest
  } = props;

  const { columns, columnsArray, columnCount } = useColumniseData({
    mediaQueries,
    items,
    columnNumbers,
    defaultColumn,
  });

  const columnWidth = useColumnWidthMeasurer(columnCount, 2);

  const renderColumns = useCallback(
    (_: number, index: number) => {
      if (virtualised) {
        return (
          <VirtualColumn
            key={`column-${index}`}
            pageRef={pageRef}
            items={columns[index]}
            renderItem={renderItem}
            columnWidth={columnWidth}
          />
        );
      }
      return (
        <FlexBox key={index} width="100%" flexDirection={"column"}>
          {columns[index]?.map((item, index) =>
            renderItem(item, index, columnWidth)
          )}
        </FlexBox>
      );
    },
    [virtualised, columnWidth, pageRef, renderItem]
  );

  return (
    <PageColumnsContainer {...rest}>
      {columnsArray.map(renderColumns)}
    </PageColumnsContainer>
  );
};

export default PageColumns;
