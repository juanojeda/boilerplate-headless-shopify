import { useGraphQL } from "graphql-react";
import catalogGQL from "../graphql/catalogGQL";
const useShopifyGql = (collectionHandle) => {
  return useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2021-01/graphql.json`;
      options.headers["X-Shopify-Storefront-Access-Token"] =
        process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN;
      options.headers["Content-Type"] = "application/json";
    },
    operation: catalogGQL(collectionHandle),
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
};

export default useShopifyGql;
