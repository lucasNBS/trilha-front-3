import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    font-size: 16px;
  }

  @font-face {
    font-family: 'NunitoSans';
    src: url('/fonts/NunitoSans-Regular.ttf');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Palanquin';
    src: url('/fonts/Palanquin-Regular.ttf');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Quattrocento';
    src: url('/fonts/Quattrocento-Regular.ttf');
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`

export default GlobalStyle