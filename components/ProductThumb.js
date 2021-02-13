import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getColor } from "../utils/themeHelpers";
import ImageGrid from "./ImageGrid";
import Title from "./Title";
import PriceTag from "./PriceTag";
import SoldOutBadge from "./SoldOutBadge";
import AddToCartButton from "./AddToCartButton";

const Wrapper = styled.div`
  margin: 1rem 0;
  position: relative;
`;

const ProductLink = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms ease color;

  &:hover {
    color: ${getColor("primary")};
  }

  &:hover ${StyledImageGrid} {
    opacity: 0.6;
  }
`;

const StyledImageGrid = styled(ImageGrid)``;

const ProductTitle = styled(Title).attrs({ level: "H4" })`
  text-align: center;
`;

const ProductThumb = ({
  handle,
  title,
  availableForSale,
  images,
  variants,
}) => {
  return (
    <Wrapper>
      <Link href={`/products/${handle}`} passHref>
        <ProductLink>
          <StyledImageGrid layout="mosaic" images={images} />
          <ProductTitle>{title}</ProductTitle>
          <SoldOutBadge availableForSale={availableForSale} />
          <PriceTag variants={variants} />
        </ProductLink>
      </Link>
      <AddToCartButton
        availableForSale={availableForSale}
        variants={variants}
      />
    </Wrapper>
  );
};

export default ProductThumb;
