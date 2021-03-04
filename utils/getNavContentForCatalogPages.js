import pagePathsGQL from "../graphql/pagePathsGQL";
import { fetchContentGQLAsync } from "../shared/fetchGQLAsync";

const getNavContentForCatalogPages = async () => {
  const { pages } = await fetchContentGQLAsync(pagePathsGQL);

  return {
    props: { navContent: pages },
  };
};

export default getNavContentForCatalogPages;
