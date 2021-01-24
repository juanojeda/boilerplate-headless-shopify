import dynamic from "next/dynamic";
import { WithCatalogData } from "../hooks/useCatalog";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export default function IndexPage() {
  return (
    <WithCatalogData catalogHandle="frontpage">
      <Catalog />
    </WithCatalogData>
  );
}
