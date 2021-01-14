import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useShopifyGql from "../hooks/useShopifyGql";
import { unwrapGqlEdges } from "../utils/unwrapGqlEdges";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export default function IndexPage() {
  const { loading, cacheValue: { data } = {} } = useShopifyGql();
  const [homeCollection, setHomeCollection] = useState(null);

  useEffect(() => {
    const { collections } = unwrapGqlEdges(data);
    const homePageCollection = collections.filter(
      ({ handle }) => handle === "frontpage"
    )[0];
    setHomeCollection(homePageCollection);
  }, [data]);

  return (
    <div>
      {data && homeCollection ? (
        <Catalog productData={homeCollection} />
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div>Error!</div>
      )}
    </div>
  );
}
