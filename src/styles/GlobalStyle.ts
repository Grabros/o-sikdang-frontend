import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

/* Util */
import { px2vw } from "../utils/style";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    font-size : 10px;
    color : ${(props) => props.theme.colors.basicFont};
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
`;

export default GlobalStyle;
