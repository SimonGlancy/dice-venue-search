import { useEffect, useState, ChangeEvent, useMemo, useCallback } from "react";
import { useDebounce } from "use-hooks";
import services from "../../services";
import { DiceEvent } from "../../types/events";
import { UseEventSearchParams } from "./use-event-search.types";

const DEFAULT_PAGE_SIZE = 12;
const DEFAULT_START_PAGE = 1;
const defaultProps: UseEventSearchParams = {
  size: DEFAULT_PAGE_SIZE,
  startPage: DEFAULT_START_PAGE,
};

const useEventSearch = ({ size, startPage } = defaultProps) => {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState<DiceEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(startPage || 1);
  const [pageSize] = useState(size);

  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (page !== 1) {
        setPage(1);
      }

      setSearchString(e.target.value);
    },
    [page]
  );

  const debouncedSearchString = useDebounce(searchString, 500);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await services.events.getEvents(
          debouncedSearchString,
          pageSize,
          page
        );

        setIsLoading(false);
        setData((prev) => {
          if (page === 1) {
            return response?.data?.data;
          }
          return [...prev, ...response?.data?.data];
        });
      } catch (err) {
        console.log("FETCH ERROR", err);
        setIsLoading(false);
      }
    };
    fetch();
  }, [debouncedSearchString, page]);

  const count = useMemo(() => data.length, [data]);
  const getMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  return {
    searchString,
    data,
    isLoading,
    onSearch,
    count,
    getMore,
  };
};

export default useEventSearch;
