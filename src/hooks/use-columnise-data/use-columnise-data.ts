import { ReactNode, useMemo } from "react";
import { useMedia } from "use-hooks";
import { columniseData } from "../../utils";
import {
  ColumnAccumulator,
  UseColumniseDataProps,
} from "./use-columnise-data.types";

const useColumniseData = <DataType>(props: UseColumniseDataProps<DataType>) => {
  const {
    items,
    mediaQueries = [
      "(min-width: 1500px)",
      "(min-width: 1000px)",
      "(min-width: 560px)",
    ],
    columnNumbers = [3, 3, 2],
    defaultColumn = 1,
  } = props;

  const columnCount = useMedia(mediaQueries, columnNumbers, defaultColumn);

  const columnsArray = useMemo(
    () => new Array(columnCount).fill(0),
    [columnCount]
  );

  // convert the flat data into a columns object
  // that can be accessed by the index of the columns Array
  const { columns }: ColumnAccumulator<DataType> = useMemo(() => {
    return columniseData(items, columnCount);
  }, [columnCount, items]);

  return { columnsArray, columns, columnCount };
};

export default useColumniseData;
