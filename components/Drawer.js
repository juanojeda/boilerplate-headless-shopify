import styled, { css } from "styled-components";
import { transparentize } from "polished";

const fromLeft = css`
  left: 0;
`;

const fromRight = css`
  right: 0;
`;

const Drawer = styled.div`
  ${({ fromDirection }) => (fromDirection === "left" ? fromLeft : fromRight)};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background: white;
  box-shadow: ${({ theme: { colors } }) =>
    `0 0 0 999px ${transparentize(0.2, colors.black.base)}`};
  height: 100vh;
  max-width: 40rem;
  padding: 1.5rem;
  position: fixed;
  top: 0;
  width: calc(100vw - 4rem);
`;

export default Drawer;
