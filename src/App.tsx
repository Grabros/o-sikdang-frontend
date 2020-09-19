import React, { useState } from "react";

/* Style */
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/DefaultTheme";

/* Component */

function App() {
  const [defaultTheme, setDefaultTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
