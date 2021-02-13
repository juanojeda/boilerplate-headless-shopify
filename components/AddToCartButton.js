import React, { useContext } from "react";
import { ShopifyContext } from "../hooks/withShopifyContext";
import Button from "./Button";

const AddToCartButton = ({ variants, availableForSale }) => {
  const { addItem } = useContext(ShopifyContext);
  const onAddToCart = () => addItem(variants[0].id);

  return (
    availableForSale && (
      <Button variant="secondary" fullWidth onClick={onAddToCart}>
        Add to cart
      </Button>
    )
  );
};

export default AddToCartButton;
