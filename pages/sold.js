import dynamic from "next/dynamic";
import { WithCatalogData } from "../hooks/useCatalog";
import Head from "next/head";
import getNavContentForCatalogPages from "../utils/getNavContentForCatalogPages";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export const getStaticProps = getNavContentForCatalogPages;

export default function SoldPage({ navContent }) {
  return (
    <>
      <Head>
        <title>Knives we've sold | HG Blades</title>
      </Head>
      <WithCatalogData catalogHandle="sold">
        <Catalog navContent={navContent} />
      </WithCatalogData>
    </>
  );
}
