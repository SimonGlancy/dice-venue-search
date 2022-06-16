import { ColumnAccumulator } from "../hooks";

export const columniseData = <DataType>(
  items: DataType[],
  columnCount: number
) => {
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
};
