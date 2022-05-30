import React, { useMemo } from "react";
import { useVirtual } from "../../hooks";
import FlexBox from "../FlexBox";
import { Cell } from "./VirtualColumn.style";
import { VirtualColumnProps } from "./VirtualColumn.types";

const VirtualColumn = <DataType,>(props: VirtualColumnProps<DataType>) => {
  const { pageRef, items, renderItem, columnWidth, overscan = 5 } = props;
  const size = useMemo(() => items?.length || 0, [items?.length]);

  const { virtualItems, totalSize } = useVirtual({
    parentRef: pageRef,
    size,
    overscan,
  });

  return (
    <FlexBox
      flexDirection={"column"}
      position="relative"
      height={totalSize}
      width={columnWidth}
    >
      {virtualItems.map((virtualItem) => (
        <Cell
          key={virtualItem.key}
          data-key={virtualItem.key}
          ref={(element) => virtualItem.measureRef(element)}
          transformValue={virtualItem.start}
        >
          {renderItem(items[virtualItem.index], virtualItem.index, columnWidth)}
        </Cell>
      ))}
    </FlexBox>
  );
};

export default VirtualColumn;
