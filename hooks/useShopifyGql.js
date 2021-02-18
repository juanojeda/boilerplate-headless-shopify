import { useEffect, useState } from "react";
import { fetchShopifyGQLAsync } from "../shared/fetchGQLAsync";

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
