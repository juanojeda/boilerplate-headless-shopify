import React from "react";
import styled from "styled-components";
import { getColor } from "../utils/themeHelpers";

const BaseIcon = styled.svg`
  fill: ${getColor("black", "light_40")};
  padding: 1rem;
  width: 4rem;
`;

const Icon = ({ icon, onClick, className }) => {
  return <BaseIcon as={icon} onClick={onClick} className={className} />;
};

export default Icon;
