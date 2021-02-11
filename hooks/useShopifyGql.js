import { useEffect, useState } from "react";
import { GraphQLClient } from "graphql-request";

const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2021-01/graphql.json`;
const HEADERS = {
  "X-Shopify-Storefront-Access-Token":
    process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
  "Content-Type": "application/json",
};

export async function fetchShopifyGQLAsync(operation, variables) {
  const client = new GraphQLClient(URL);
  return client.request(operation, variables, HEADERS);
}

const useShopifyGql = (operation, variables) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const fetchedData = await fetchShopifyGQLAsync(operation, variables);

      setData(fetchedData);
      setLoading(false);
    };

    fetchDataAndSetState();
  }, []);

  return { loading, data };
};

export default useShopifyGql;
