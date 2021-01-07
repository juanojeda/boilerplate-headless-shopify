import React, { useEffect, useState } from "react";
import ShopifyBuy from "@shopify/buy-button-js";
import env from "../env.json";

const Catalog = ({ productData }) => {
  const client = ShopifyBuy.buildClient({
    domain: env.SHOPIFY_DOMAIN,
    storefrontAccessToken: env.SHOPIFY_ACCESS_TOKEN,
  });
  const UI = ShopifyBuy.UI.init(client);

  const allCollections = productData.collections.edges;

  useEffect(() => {
    console.log(atob(allCollections[0].node.id));
    UI.createComponent("collection", {
      id: atob(allCollections[0].node.id).split("gid://shopify/Collection/")[1],
      node: document.getElementById("shopify"),
    });
  }, []);

  // const productsFromFirstCollection = allCollections[0].node.products.edges;

  return (
    <div id="shopify">
      <h1>Demo store gallery</h1>
    </div>
  );
};

export default Catalog;
