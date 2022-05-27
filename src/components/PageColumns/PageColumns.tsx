import { PropsWithChildren, ReactNode, useMemo } from "react";
import { CSSProperties } from "styled-components";
import { useMedia } from "use-hooks";
import FlexBox from "../FlexBox";
import { PageColumnsContainer } from "./PageColumns.style";

export type PageColumnsProps<DataType> = {
  gap?: number;
  direction?: "column" | "row";
  justifyContent?: CSSProperties["justifyContent"];
  items: DataType[];
  renderItem: (item: DataType, index: number) => ReactNode;
};

export type ColumnAccumulator<T> = {
  count: number;
  columns: Record<string, T[]>;
};

const PageColumns = <DataType,>(
  props: PropsWithChildren<PageColumnsProps<DataType>>
) => {
  const { children, items, renderItem, ...rest } = props;
  const columnCount = useMedia(
    ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 560px)"],
    [3, 3, 2],
    1
  );

  const columnsArray = useMemo(
    () => new Array(columnCount).fill(0),
    [columnCount]
  );

  // convert the flat data into a columns object
  // that can be accessed by the index of the columns Array
  const { columns }: ColumnAccumulator<DataType> = useMemo(() => {
    const result = items.reduce(
      (acc, curr) => {
        const count = acc.count;
        const resetCount = count === columnCount - 1;
        const existingValues = acc?.columns[count.toString()];

        return {
          columns: {
            ...acc.columns,
            [count]: !!existingValues ? [...existingValues, curr] : [curr],
          },
          count: resetCount ? 0 : count + 1,
        };
      },
      { count: 0, columns: {} } as ColumnAccumulator<DataType>
    );
    return result;
  }, [columnCount, items]);

  return (
    <PageColumnsContainer {...rest}>
      {columnsArray.map((item, index) => (
        <FlexBox key={index} width={"100%"} flexDirection={"column"}>
          {columns[index]?.map(renderItem)}
        </FlexBox>
      ))}
    </PageColumnsContainer>
  );
};

export default PageColumns;
