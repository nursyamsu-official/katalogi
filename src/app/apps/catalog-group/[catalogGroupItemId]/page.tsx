import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Catalog Group Item`,
    description: "Catalog Group Item",
}

export default async function CatalogGroupItemIdPage({ params }: {
    params: Promise<{ catalogGroupItemId: string }>
}) {
    const { catalogGroupItemId } = await params;
    return (
        <div>
            <h1>Catalog Group Item {catalogGroupItemId}</h1>
            <Button>Click me</Button>
        </div>
    );
}