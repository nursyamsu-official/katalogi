import { Metadata } from "next";
import { getCatalogGroupHeadersDb } from "@/lib/data/catalog-group-header-db";
import { CatalogGroupHeaderCard } from "@/components/apps/catalog-group-component/catalog-group-header-card";


import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Catalog Group",
  description: "Catalog Group",
};

export default async function CatalogGroupPage() {
  const catalogGroupHeaders = await getCatalogGroupHeadersDb();
  console.log(catalogGroupHeaders);

  const catalogGroupHeadersProps = catalogGroupHeaders.map((header) => ({
    id: header.id,
    name: header.name,
    description: header.description ?? "",
    createdAt: header.createdAt,
    updatedAt: header.updatedAt,
  }));

  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-300 pt-4 pb-4">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
          Catalog Group
        </h1>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          <span className="hidden sm:block">Add Catalog Group</span>
        </Button>
      </div>

      <CatalogGroupHeaderCard dataProps={catalogGroupHeadersProps} />

    </div>
  );
}
