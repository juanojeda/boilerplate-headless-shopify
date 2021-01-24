import { createContext, useContext, useEffect, useState } from "react";
import { unwrapGqlEdges } from "../utils/unwrapGqlEdges";
import useShopifyGql from "./useShopifyGql";

const CatalogDataContext = createContext(null);

export const useCatalogData = () => {
  const catalogContext = useContext(CatalogDataContext);

  if (catalogContext === null) {
    throw new Error(
      "useCatalogData must be used within a WithCatalogData provider tag"
    );
  }

  return catalogContext;
};

export const WithCatalogData = ({ catalogHandle, children }) => {
  const { loading, cacheValue: { data } = {} } = useShopifyGql();
  const [catalogCollection, setCatalogCollection] = useState(null);

  useEffect(() => {
    if (!data) return;
    const { collections } = unwrapGqlEdges(data);
    const homePageCollection = collections.filter(
      ({ handle }) => handle === catalogHandle
    )[0];
    setCatalogCollection(homePageCollection);
  }, [data, unwrapGqlEdges]);

  return (
    <CatalogDataContext.Provider value={{ productData: catalogCollection }}>
      {catalogCollection ? (
        children
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>Error!</div>
      )}
    </CatalogDataContext.Provider>
  );
};
