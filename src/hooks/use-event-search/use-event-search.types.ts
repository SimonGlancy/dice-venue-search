import { ChangeEventHandler } from "react";
import { DiceEvent } from "../../types/events";

export type UseEventSearchReturnValue = {
  searchString: string;
  data: DiceEvent[];
  isLoading: boolean;
  onSearch: ChangeEventHandler<HTMLInputElement>;
  count: number;
  getMore: () => void;
};

export type UseEventSearchParams = {
  size?: number;
  startPage?: number;
};
