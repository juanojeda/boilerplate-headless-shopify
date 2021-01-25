import { gridMedia, gridVisual } from "neat-components";
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
    ${({ $showGrid, theme: { grid } }) => $showGrid && gridVisual(grid.sm)};
    ${({ $showGrid, theme: { grid } }) =>
      $showGrid && gridMedia(grid.md, gridVisual(grid.md))};
    ${({ $showGrid, theme: { grid } }) =>
      $showGrid && gridMedia(grid.lg, gridVisual(grid.lg))};
  }
`;

export default GlobalStyles;
