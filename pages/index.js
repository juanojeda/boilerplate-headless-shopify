import { useGraphQL } from "graphql-react";
import dynamic from "next/dynamic";
import env from "../env.json";
import catalogGQL from "../graphql/catalogGQL";
import useShopify from "../hooks/useShopify";

const Catalog = dynamic(import("../components/Catalog"));

const unwrapEdges = (prop) => {
  if (typeof prop !== "object" || prop === null) return prop;
  const entries = Object.entries(prop);

  return entries.reduce(
    (acc, [key, value]) =>
      key === "edges"
        ? value.map(({ node }) => unwrapEdges(node))
        : { ...acc, [key]: unwrapEdges(value) },
    {}
  );
};

export default function IndexPage() {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
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

  const { cart, loading: cartLoading } = useShopify({
    domain: env.SHOPIFY_DOMAIN,
    storefrontAccessToken: env.SHOPIFY_ACCESS_TOKEN,
  });
  return (
    <div>
      {data && cart ? (
        <Catalog productData={unwrapEdges(data)} />
      ) : loading || cartLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Error!</div>
      )}
    </div>
  );
}
