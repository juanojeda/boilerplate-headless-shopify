import { css } from "styled-components";

const HorizontalRule = css`
  position: relative;
  &::after {
    background: ${({ theme: { colors } }) => colors.black.light_80};
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 4rem;
    position: absolute;
    right: 4rem;
    width: calc(100% - 8rem);
  }
`;

export default HorizontalRule;
