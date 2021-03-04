import dynamic from "next/dynamic";
import { WithCatalogData } from "../hooks/useCatalog";
import getNavContentForCatalogPages from "../utils/getNavContentForCatalogPages";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export const getStaticProps = getNavContentForCatalogPages;

export default function IndexPage({ navContent }) {
  return (
    <WithCatalogData catalogHandle="sale">
      <Catalog navContent={navContent} />
    </WithCatalogData>
  );
}
