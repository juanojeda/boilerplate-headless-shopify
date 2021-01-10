import React from "react";
import env from "../env.json";
import useShopify from "../hooks/useShopify";

const Catalog = ({ productData }) => {
  return <pre>productData = {JSON.stringify(productData, null, 2)}</pre>;
};

export default Catalog;
