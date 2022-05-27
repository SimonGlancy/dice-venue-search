import { useEffect, useState, ChangeEvent, useMemo, useCallback } from 'react';
import { useDebounce } from 'use-hooks';
import services from '../../services';
import { DiceEvent } from '../../types/events';

export type UseEventSearchReturnValue = {
  searchString: string;
  data: DiceEvent[];
  isLoading: boolean;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  count: number;
  getMore: () => void;
};

const useEventSearch = () => {
  const [searchString, setSearchString] = useState('');
  const [data, setData] = useState<DiceEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);

  // debounce this
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
        console.log('FETCH ERROR', err);
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
