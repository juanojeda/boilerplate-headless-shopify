import React from "react";
import styled, { css, keyframes } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const pulseAnimation = (props) => keyframes`
  0% {
    
    background: ${getColor("neutral", "light_60")(props)};
  }
  70% {
    background: ${getColor("neutral", "light_80")(props)};
  }
  100% {
    background: ${getColor("neutral", "light_80")(props)};
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: ${({ $maxHeight }) => $maxHeight};

  ${({ loaded }) =>
    !loaded &&
    css`
      padding-bottom: ${({ $maxHeight }) => $maxHeight || "100%"};
      animation-duration: 1.5s;
      animation-timing-function: ease-in;
      animation-direction: alternate;
      -moz-animation-iteration-count: infinite;
      -moz-animation-name: ${(props) => pulseAnimation(props)};
    `}
`;

const Image = ({ alt, className, loaded, onClick, src, maxHeight }) => {
  return (
    <Img
      className={className}
      alt={alt}
      as={loaded ? "img" : "div"}
      className={className}
      loaded={loaded}
      onClick={onClick}
      src={src}
      $maxHeight={maxHeight}
    />
  );
};

export default Image;
