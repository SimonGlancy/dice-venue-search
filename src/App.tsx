import { useState } from "react";

import "./App.css";
import { useEventSearch } from "./hooks";
import { AppHeader } from "./components";

import { ThemeProvider } from "styled-components";
import { diceTheme } from "./theme";
import { EventsPage } from "./pages";

function App() {
  const { isLoading, data, onSearch, searchString, getMore } = useEventSearch();

  return (
    <ThemeProvider theme={diceTheme}>
      <div className="App">
        <AppHeader searchString={searchString} onSearch={onSearch} />
        <EventsPage events={data} getMore={getMore} isLoading={isLoading} />
      </div>
    </ThemeProvider>
  );
}

export default App;
