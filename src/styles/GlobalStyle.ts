import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

/* Util */
import { px2vw } from "../utils/style";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family : 'Source Sans Pro' , sans-serif;
  }

  body {
    color : ${(props) => props.theme.basicFont};
    background-color : ${(props) => props.theme.basicBg};
    position : relative;
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

  a:link {  text-decoration: none;}
 a:visited {  text-decoration: none;}
 a:hover { text-decoration: underline;}


  

  h1 {
    font-size : 3rem;
    font-weight : bold;

    @media screen and (min-width : 1024px) {
      font-size : 2.4rem;
    }
  }

  h2 {
    font-size : 2.4rem;
    font-weight : bold;

    @media screen and (min-width : 1024px) {
      font-size : 1.8rem;
    }
  }
  
  h3 {
    font-size : 1.8rem;
    font-weight : bold;

    @media screen and (min-width : 1024px) {
      font-size : 1.2rem;
    }
  }

  p {
    font-size : 1.2rem;

    @media (min-width : 1024px) {
      font-size : 1rem;
    }
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 1024px) {
    padding-right: 30px;
    padding-left: 40px;
  }
`;

export default GlobalStyle;
