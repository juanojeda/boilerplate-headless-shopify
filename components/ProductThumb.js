import React, { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import { formatPrice } from "../utils/formatPrice";

const extractPrice = (variant) => variant[0].priceV2;
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

  return (
    <div>
      <h3>{title}</h3>
      <div>product id: {id}</div>
      <img src={images[0].originalSrc} alt={images[0].altText} height="200" />
      {!availableForSale && <div>sold out</div>}
      <div>stock: {totalInventory}</div>
      <div>Price: {formatPrice(extractPrice(variants))}</div>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductThumb;
