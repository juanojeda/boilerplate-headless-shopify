import React from "react";
import styled from "styled-components";
import AddToCartButton from "./AddToCartButton";
import ImageViewer from "./ImageViewer";
import MaxWidthContainer from "./MaxWidthContainer";
import PriceTag from "./PriceTag";
import Title from "./Title";

const Wrapper = styled(MaxWidthContainer)`
  padding: 1.5rem;
`;

const SaleWrapper = styled.div``;

const ProductDetail = ({ variants, title, availableForSale, images }) => {
  return (
    <Wrapper>
      <Title level="H1">{title}</Title>
      <SaleWrapper>
        <PriceTag variants={variants} />

        <AddToCartButton
          availableForSale={availableForSale}
          variants={variants}
        />
      </SaleWrapper>
      <ImageViewer images={images} />
    </Wrapper>
  );
};

export default ProductDetail;
