import React, { useState } from "react";

/* Style */
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/DefaultTheme";
import GlobalStyle from "./styles/GlobalStyle";

/* Component */
import Header from "./components/Header/Header";
import Switch from "./components/Switch/Switch";
import LocationPin from "./components/LocationPin/LocationPin";

function App() {
  const [isDark, setIsDark] = useState(false);

  function changeTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Switch changeTheme={changeTheme} isDark={isDark} />
      <LocationPin />
    </ThemeProvider>
  );
}

export default App;
