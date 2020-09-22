import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

/* Style */
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/DefaultTheme";
import GlobalStyle from "./styles/GlobalStyle";

/* Component */
import Header from "./components/Header/Header";
import SwitchMode from "./components/SwitchMode/SwitchMode";
import LocationPin from "./components/LocationPin/LocationPin";
import Map from "./components/Map/Map";

function App() {
  const [isDark, setIsDark] = useState(false);

  function changeTheme() {
    setIsDark(!isDark);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <SwitchMode changeTheme={changeTheme} isDark={isDark} />
      <Switch>
        <Route path="/" component={LocationPin} exact />
        <Route path="/map" component={Map} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
