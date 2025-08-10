import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getCatalogGroups } from "@/lib/data/catalog-group/get-catalog-groups";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { Card, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Catalog Group",
  description: "Catalog Group",
};

export default async function CatalogGroupPage() {
  const catalogGroups = await getCatalogGroups();
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
      <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {catalogGroups.map((catalogGroup) => (
          <Card key={catalogGroup.id} className="p-4">
            <CardHeader>{catalogGroup.name}</CardHeader>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              {catalogGroup.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {catalogGroup.items.map((item) => (
                <div key={item.id}>
                  <Link
                    href={`/apps/catalog-group/${catalogGroup.id}/${item.id}`}
                    className="text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
