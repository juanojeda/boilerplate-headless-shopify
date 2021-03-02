import { css } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const HorizontalRule = (topOrBottom = "bottom") => css`
  position: relative;
  &::after {
    background: ${getColor("black", "light_80")};
    ${topOrBottom}: 0;
    content: "";
    display: block;
    height: 1px;
    left: 3rem;
    position: absolute;
    right: 3rem;
  }
`;

export default HorizontalRule;
