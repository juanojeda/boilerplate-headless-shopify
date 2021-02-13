import { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { unwrapGqlEdges } from "../utils/unwrapGqlEdges";
import useShopifyGql from "./useShopifyGql";
import productGQL from "../graphql/productGQL";

const ProductDataContext = createContext(null);

export const useProductData = () => {
  const productContext = useContext(ProductDataContext);

  if (productContext === null) {
    throw new Error(
      "useProductData must be used within a WithProductData provider tag"
    );
  }

  return catalogContext;
};

export const WithProductData = ({ productHandle, children }) => {
  const gqlOperation = productGQL(productHandle);
  const { loading, data } = useShopifyGql(productGQL, {
    handle: productHandle,
  });
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (!data) return;
    const { product } = unwrapGqlEdges(data);
    setProductData(product);
  }, [data, unwrapGqlEdges]);

  return (
    <ProductDataContext.Provider value={{ productData }}>
      {productData ? children : loading ? <Loading /> : <div>Error!</div>}
    </ProductDataContext.Provider>
  );
};
