import React from "react";
import styled from "styled-components";
import { getColor } from "../utils/themeHelpers";

const Badge = styled.div`
  align-items: center;
  background: ${getColor("black")};
  border: 0.5px solid ${getColor("white")};
  box-shadow: 0 0 0 0.3rem ${getColor("black")};
  border-radius: 50%;
  color: ${getColor("white")};
  display: flex;
  height: 6rem;
  justify-content: center;
  position: absolute;
  padding: 1rem;
  right: 1rem;
  text-transform: uppercase;
  top: 1rem;
  width: 6rem;
`;

const BadgeText = styled.span`
  font-size: 1.4rem;
  text-align: center;
`;

const SoldOutBadge = ({ availableForSale }) =>
  !availableForSale && (
    <Badge>
      <BadgeText>sold out</BadgeText>
    </Badge>
  );

export default SoldOutBadge;
