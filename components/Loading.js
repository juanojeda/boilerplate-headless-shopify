import React from "react";
import styled, { keyframes } from "styled-components";
import { getColor } from "../utils/themeHelpers";

const slideInOut = keyframes`
  0% {
    opacity: 0;
    right: 0
  }
  100% {
    opacity: 1;
    right: 100%;
  }
`;

const Wrapper = styled.div`
  width: 6rem;
  margin: 0 auto;
  position: relative;
`;

const Indicator = styled.div`
  animation: 1s ease ${slideInOut} infinite alternate;
  background: ${getColor("neutral", "light_20")};
  border-radius: 50%;
  font-size: 0;
  height: 1rem;
  width: 1rem;
  position: absolute;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Indicator>Loading ...</Indicator>
    </Wrapper>
  );
};

export default Loading;
