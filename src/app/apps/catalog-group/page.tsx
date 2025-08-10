import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getCatalogGroups } from "@/lib/data/catalog-group-header/get-catalog-groups";
import { PlusIcon } from "lucide-react";
import { CatalogGroupComp } from "@/components/apps/catalog-group/catalog-group-comp";

export const metadata: Metadata = {
  title: "Catalog Group",
  description: "Catalog Group",
};

export default async function CatalogGroupPage() {
  const catalogGroups = await getCatalogGroups();
  console.log(catalogGroups);
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-300 pt-4 pb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
          Catalog Group
        </h1>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Add Catalog Group
        </Button>
      </div>
      <div className="pt-4">
        <div></div>
        <pre>{JSON.stringify(catalogGroups, null, 2)}</pre>
      </div>
      {/* Catalog Group Comp */}
      {/* <CatalogGroupComp /> */}
    </div>
  );
}
