import { z } from "zod";
import { catalogGroupHeaderOutputSchema } from "@/schemas/catalog-group-header-schema";
import { Button } from "@/components/ui/button";
import { Eye, PlusIcon, Watch } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type CatalogGroupHeaderCardProps = {
  dataProps: z.infer<typeof catalogGroupHeaderOutputSchema>[];
};

export function CatalogGroupHeaderCard({
  dataProps,
}: CatalogGroupHeaderCardProps) {
  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dataProps.map((item) => (
        <Card key={item.id} className="px-0">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
              {item.name}
            </CardTitle>
            {/* <CardDescription className="text-sm sm:text-base md:text-lg text-gray-500">
              {item.description}
            </CardDescription> */}
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-base sm:text-base md:text-lg text-gray-500">
              {item.description}
            </p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 w-full" asChild
            >
              <Link href={`/apps/catalog-group/${item.id}`}>
                <Eye className="w-4 h-4" />
                See Details
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
