import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    // font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
    // line-height: 1.5;
    // font-weight: 400;

    // color: #f2f3f5;
    // background-color: #0c0c0d;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }

  html {
    font-size: 12px;
  
    ${({ theme }) => theme.media.t} {
      font-size: 14px;
    }

    ${({ theme }) => theme.media.d} {
      font-size: 16px;
    }

    ${({ theme }) => theme.media.l} {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    ${({ theme }) => theme.fonts.main};
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.color.text};
    background-color: ${({theme}) => theme.color.main};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => theme.media.t} {
    [id] {
      scroll-margin-top: 120px;
    }
  }
`;