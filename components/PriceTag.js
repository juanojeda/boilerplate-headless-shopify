import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/formatPrice";

const Price = styled.div`
  font-size: 2rem;
  font-weight: 200;
  text-align: ${({ $align }) => $align};
`;

const Currency = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
`;

const PriceTag = ({ variants, align = "center", availableForSale }) => {
  const variant = variants[0];
  if (!availableForSale) return null;
  return (
    <Price $align={align}>
      {formatPrice(variant.priceV2)} <Currency>aud</Currency>
    </Price>
  );
};

export default PriceTag;
