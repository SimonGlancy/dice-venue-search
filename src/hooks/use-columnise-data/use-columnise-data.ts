import { ReactNode, useMemo } from 'react';
import { useMedia } from 'use-hooks';
import {
  ColumnAccumulator,
  UseColumniseDataProps,
} from './use-columnise-data.types';

const useColumniseData = <DataType>(props: UseColumniseDataProps<DataType>) => {
  const {
    items,
    mediaQueries = [
      '(min-width: 1500px)',
      '(min-width: 1000px)',
      '(min-width: 560px)',
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

  return { columnsArray, columns, columnCount };
};

export default useColumniseData;
