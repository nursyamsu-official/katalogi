import { z } from "zod";
import { catalogGroupHeaderOutputSchema } from "@/schemas/catalog-group-header-schema";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CatalogGroupHeaderCardProps = {
  dataProps: z.infer<typeof catalogGroupHeaderOutputSchema>[];
};

export function CatalogGroupHeaderCard({
  dataProps,
}: CatalogGroupHeaderCardProps) {
  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dataProps.map((item) => (
        <Card key={item.id} className="p-4">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
              {item.name}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base md:text-lg text-gray-500">
              {item.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base md:text-lg text-gray-500">
              {item.description}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              Add Catalog
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
