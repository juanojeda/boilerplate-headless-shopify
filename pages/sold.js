import dynamic from "next/dynamic";
import { WithCatalogData } from "../hooks/useCatalog";
import Head from "next/head";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export default function SoldPage() {
  return (
    <>
      <Head>
        <title>Knives we've sold | HG Blades</title>
      </Head>
      <WithCatalogData catalogHandle="sold">
        <Catalog />
      </WithCatalogData>
    </>
  );
}
