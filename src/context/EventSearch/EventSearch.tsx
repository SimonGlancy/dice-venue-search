import { createContext, PropsWithChildren, useContext } from 'react';
import { useEventSearch } from '../../hooks';
import { UseEventSearchReturnValue } from '../../hooks/use-event-search/use-event-search';

const initialValues: UseEventSearchReturnValue = {
  getMore: () => {},
  searchString: '',
  data: [],
  count: 0,
  onSearch: () => {},
  isLoading: false,
};

const EventSearchContext =
  createContext<UseEventSearchReturnValue>(initialValues);

const EventSearchProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const value = useEventSearch();

  return (
    <EventSearchContext.Provider value={value}>
      {children}
    </EventSearchContext.Provider>
  );
};

export const useEventSearchContext = () => {
  return useContext(EventSearchContext);
};

export default EventSearchProvider;
