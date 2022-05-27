import './App.css';

import { AppHeader } from './components';

import { ThemeProvider } from 'styled-components';
import { diceTheme } from './theme';
import { EventsPage } from './pages';
import EventSearchProvider from './context/EventSearch/EventSearch';

function App() {
  return (
    <ThemeProvider theme={diceTheme}>
      <EventSearchProvider>
        <div className='App'>
          <AppHeader />
          <EventsPage />
        </div>
      </EventSearchProvider>
    </ThemeProvider>
  );
}

export default App;
