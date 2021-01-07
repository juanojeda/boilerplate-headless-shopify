import { useGraphQL } from "graphql-react";
import dynamic from "next/dynamic";
import env from "../env.json";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

const isClient = typeof window !== "undefined";

export default function IndexPage() {
  const { loading, cacheValue: { data } = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `https://${env.SHOPIFY_DOMAIN}/api/2020-10/graphql.json`;
      options.headers["X-Shopify-Storefront-Access-Token"] =
        env.SHOPIFY_ACCESS_TOKEN;
      options.headers["Content-Type"] = "application/json";
    },
    operation: {
      query: /* GraphQL */ `
        {
          collections(first: 1) {
            edges {
              node {
                id
                handle
                title
                products(first: 50) {
                  edges {
                    node {
                      id
                      title
                      availableForSale
                      totalInventory
                      description
                    }
                  }
                }
              }
            }
          }
        }
      `,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return (
    <div>
      {data ? (
        <Catalog productData={data} />
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>Error!</div>
      )}
    </div>
  );
}
