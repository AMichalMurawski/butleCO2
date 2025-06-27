import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

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

  ${({ theme }) => theme.media.t} {
    [id] {
      scroll-margin-top: 120px;
    }
  }
`;