import { useGraphQL } from "graphql-react";
import catalogGQL from "../graphql/catalogGQL";
import env from "../env.json";

const useShopifyGql = () =>
  useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `https://${env.SHOPIFY_DOMAIN}/api/2020-10/graphql.json`;
      options.headers["X-Shopify-Storefront-Access-Token"] =
        env.SHOPIFY_ACCESS_TOKEN;
      options.headers["Content-Type"] = "application/json";
    },
    operation: catalogGQL,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

export default useShopifyGql;
