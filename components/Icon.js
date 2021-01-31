import React from "react";
import styled from "styled-components";

const BaseIcon = styled.svg`
  fill: ${({ theme: { colors } }) => colors.black.light_40};
  padding: 1rem;
  width: 4rem;
`;

const Icon = ({ icon, onClick, className }) => {
  return <BaseIcon as={icon} onClick={onClick} className={className} />;
};

export default Icon;
