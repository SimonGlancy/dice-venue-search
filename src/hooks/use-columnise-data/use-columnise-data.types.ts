export type ColumnAccumulator<T> = {
  count: number;
  columns: Record<string, T[]>;
};

export type UseColumniseDataProps<DataType> = {
  items: DataType[];
  mediaQueries: string[];
  columnNumbers: number[];
  defaultColumn: number;
};
