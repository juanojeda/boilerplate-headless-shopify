import React, { useContext } from "react";
import styled from "styled-components";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";
import ImageGrid from "./ImageGrid";

const Wrapper = styled.div`
  margin: 1rem 0;
`;

const ProductThumb = ({
  id,
  title,
  availableForSale,
  totalInventory,
  images,
  variants,
}) => {
  const { addItem } = useContext(ShopifyContext);
  const onAddToCart = () => addItem(variants[0].id);
  const variant = variants[0];

  return (
    <Wrapper>
      <ImageGrid images={images} />
      <h4>{title}</h4>
      {!availableForSale && <div>sold out</div>}
      <div>stock: {totalInventory}</div>
      <div>Price: {formatPrice(variant.priceV2)}</div>
      <button onClick={onAddToCart}>Add to cart</button>
    </Wrapper>
  );
};

export default ProductThumb;
