import dynamic from "next/dynamic";
import { WithCatalogData } from "../hooks/useCatalog";

const Catalog = dynamic(import("../components/Catalog"), { ssr: false });

export default function SoldPage() {
  return (
    <WithCatalogData catalogHandle="sold">
      <Catalog />
    </WithCatalogData>
  );
}
