import { useState } from 'react';

import './App.css';
import { useEventSearch } from './hooks';
import { AppHeader } from './components';

import { ThemeProvider } from 'styled-components';
import { diceTheme } from './theme';
import { EventsPage } from './pages';
import EventSearchProvider from './context/EventSearch/EventSearch';

function App() {
  const { isLoading, data, onSearch, searchString, getMore } = useEventSearch();

  return (
    <ThemeProvider theme={diceTheme}>
      <EventSearchProvider>
        <div className='App'>
          <AppHeader searchString={searchString} onSearch={onSearch} />
          <EventsPage events={data} getMore={getMore} isLoading={isLoading} />
        </div>
      </EventSearchProvider>
    </ThemeProvider>
  );
}

export default App;
