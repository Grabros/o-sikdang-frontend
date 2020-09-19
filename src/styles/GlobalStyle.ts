import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

/* Util */
import { px2vw } from "../utils/style";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    color : ${(props) => props.theme.basicFont};
    background-color : ${(props) => props.theme.basicBg};
    box-sizing: border-box;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }
    }

    button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline : none;
  }

  h1 {
    font-size : 3rem;

    @media (min-width : 1024px) {
      font-size : 2.5rem;
    }
  }

  h2 {
    font-size : 2.5rem;

    @media (min-width : 1024px) {
      font-size : 2rem;
    }
  }
  
  h3 {
    font-size : 2rem;

    @media (min-width : 1024px) {
      font-size : 1.5rem;
    }
  }
`;

export default GlobalStyle;
