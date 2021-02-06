import { ViewMajor } from "@shopify/polaris-icons";
import React, { useContext } from "react";
import styled from "styled-components";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";
import { getColor } from "../utils/themeHelpers";
import ImageGrid from "./ImageGrid";
import Icon from "./Icon";
import Title from "./Title";
import { transparentize } from "polished";
import Button from "./Button";

const Wrapper = styled.div`
  margin: 1rem 0;
  position: relative;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 200;
  text-align: center;
`;

const Currency = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
`;

const ProductTitle = styled(Title).attrs({ level: "H4" })`
  text-align: center;
`;

const SoldOutBadge = styled.div`
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

const ViewDetailsOverlay = styled.a`
  align-items: center;
  background: ${(props) => transparentize(0.5, getColor("black")(props))};
  color: ${getColor("white")};
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  transition: 0.3s ease opacity;
  width: 100%;
`;

const OverlayWrapper = styled.div`
  position: relative;
  padding-bottom: 2rem;

  &:hover ${ViewDetailsOverlay} {
    opacity: 1;
    pointer-events: initial;
  }
`;

const StyledIcon = styled(Icon)`
  fill: ${getColor("white")};
`;

const ProductThumb = ({ id, title, availableForSale, images, variants }) => {
  const { addItem } = useContext(ShopifyContext);
  const onAddToCart = () => addItem(variants[0].id);
  const variant = variants[0];

  return (
    <Wrapper>
      <OverlayWrapper>
        <ImageGrid images={images} />
        <ProductTitle>{title}</ProductTitle>
        {!availableForSale && (
          <SoldOutBadge>
            <BadgeText>sold out</BadgeText>
          </SoldOutBadge>
        )}
        <Price>
          {formatPrice(variant.priceV2)} <Currency>aud</Currency>
        </Price>
        <ViewDetailsOverlay>
          <StyledIcon icon={ViewMajor} />
          View details
        </ViewDetailsOverlay>
      </OverlayWrapper>
      {availableForSale && (
        <Button variant="secondary" fullWidth onClick={onAddToCart}>
          Add to cart
        </Button>
      )}
    </Wrapper>
  );
};

export default ProductThumb;
