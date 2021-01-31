import { createGlobalStyle } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${getColor("white")};
    font-family: "Public Sans";
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
