import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { getColor } from "../utils/themeHelpers";
import ImageGrid from "./ImageGrid";
import Title from "./Title";
import PriceTag from "./PriceTag";
import SoldOutBadge from "./SoldOutBadge";
import AddToCartButton from "./AddToCartButton";

const G_PRODUCT_LINK = "productLink";
const G_PRODUCT_CTA = "productCTA";

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-areas: ${`
    "${G_PRODUCT_LINK}"
    "${G_PRODUCT_CTA}"
  `};
  grid-template-rows: 1fr 5.5rem;
  margin: 1rem 0;
  position: relative;
`;

const ProductLink = styled.a`
  color: inherit;
  cursor: pointer;
  display: grid;
  grid-area: ${G_PRODUCT_LINK};
  grid-template-rows: auto 3fr 1fr;
  text-decoration: none;
  transition: 200ms ease color;

  &:hover {
    color: ${getColor("primary")};
  }

  &:hover ${StyledImageGrid} {
    opacity: 0.6;
  }
`;

const StyledPriceTag = styled(PriceTag)`
  align-self: flex-end;
`;

const CTA = styled(AddToCartButton)`
  grid-area: ${G_PRODUCT_CTA};
  margin: 0;
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
          <StyledPriceTag
            variants={variants}
            availableForSale={availableForSale}
          />
        </ProductLink>
      </Link>
      <CTA availableForSale={availableForSale} variants={variants} />
    </Wrapper>
  );
};

export default ProductThumb;
