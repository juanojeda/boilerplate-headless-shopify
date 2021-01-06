import React, { useEffect, useState } from "react";
import ShopifyBuy from "shopify-buy";
import env from "../env.json";
import useShopify from "../hooks/useShopify";

const Catalog = ({ productData }) => {
  const { cart, loading } = useShopify({
    domain: env.SHOPIFY_DOMAIN,
    storefrontAccessToken: env.SHOPIFY_ACCESS_TOKEN,
  });

  const allCollections = productData.collections.edges;
  const productsFromFirstCollection = allCollections[0].node.products.edges;

  return loading || !cart ? (
    <div>Loading</div>
  ) : (
    <div>cart ID is {cart.id}</div>
  );
};

export default Catalog;
