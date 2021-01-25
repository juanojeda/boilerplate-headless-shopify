import { gridVisual } from "neat-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Public Sans";
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    ${({ $showGrid, theme }) => $showGrid && gridVisual(theme)}
  }
`;

export default GlobalStyles;
