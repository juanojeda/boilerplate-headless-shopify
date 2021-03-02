import styled, { css } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const defaultStyles = css`
  padding-bottom: 2rem;
  padding-top: 2rem;
  text-transform: uppercase;
`;

const compactStyles = css`
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const NavAnchor = styled.a`
  color: ${getColor("links")};
  display: inline-block;
  text-decoration: none;
  width: 100%;

  ${({ $isCompact }) => ($isCompact ? compactStyles : defaultStyles)};

  &:hover {
    color: ${getColor("links", "light_40")};
  }
`;

export default NavAnchor;
