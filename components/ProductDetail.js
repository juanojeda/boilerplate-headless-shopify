import React from "react";
import styled from "styled-components";
import useMedia from "../hooks/useMedia";
import AddToCartButton from "./AddToCartButton";
import ImageViewer from "./ImageViewer";
import MaxWidthContainer from "./MaxWidthContainer";
import PriceTag from "./PriceTag";
import Title from "./Title";

const G_TITLE = "title";
const G_SALE_WRAPPER = "saleWrapper";
const G_IMAGE_VIEWER = "imageViewer";

const Wrapper = styled(MaxWidthContainer)`
  padding: 1.5rem;
  display: grid;
  grid-template-areas:
    "${G_IMAGE_VIEWER}"
    "${G_TITLE}"
    "${G_SALE_WRAPPER}";
  grid-auto-rows: max-content;
`;

const StyledTitle = styled(Title)`
  grid-area: ${G_TITLE};
`;

const SaleWrapper = styled.div`
  grid-area: ${G_SALE_WRAPPER};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledImageViewer = styled(ImageViewer)`
  grid-area: ${G_IMAGE_VIEWER};
  display: grid;
  grid-row-gap: 2rem;
`;

const ProductDetail = ({ variants, title, availableForSale, images }) => {
  const { isMedia } = useMedia();

  return (
    <Wrapper>
      <StyledTitle level={isMedia("xs") ? "H3" : "H1"}>{title}</StyledTitle>
      <SaleWrapper>
        <PriceTag variants={variants} />

        <AddToCartButton
          availableForSale={availableForSale}
          variants={variants}
        />
      </SaleWrapper>
      <StyledImageViewer images={images} />
    </Wrapper>
  );
};

export default ProductDetail;
