import { GraphQLClient } from "graphql-request";

const GQL_SERVER = {
  SHOPIFY: {
    URL: `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2021-01/graphql.json`,
    HEADERS: {
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/json",
    },
  },
  STRAPI: {
    URL: `http://${process.env.STRAPI_GQL_SERVER}`,
    HEADERS: {
      "Content-Type": "application/json",
    },
  },
};

export async function fetchGQLAsync(server, operation, variables = undefined) {
  const { URL, HEADERS } = server;
  const client = new GraphQLClient(URL, { headers: HEADERS });
  return client.request(operation, variables);
}

export const fetchShopifyGQLAsync = async (operation, variables = undefined) =>
  fetchGQLAsync(GQL_SERVER.SHOPIFY, operation, variables);

export const fetchContentGQLAsync = async (operation, variables = undefined) =>
  fetchGQLAsync(GQL_SERVER.STRAPI, operation, variables);
