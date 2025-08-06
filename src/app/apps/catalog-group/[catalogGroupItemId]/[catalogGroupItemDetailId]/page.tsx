import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Catalog Group Item Detail`,
    description: "Catalog Group Item Detail",
}

export default async function CatalogGroupItemDetailIdPage({ params }: {
    params: Promise<{ catalogGroupItemId: string, catalogGroupItemDetailId: string }>
}) {
    const { catalogGroupItemId, catalogGroupItemDetailId } = await params;
    return (
        <div>
            <h1>Catalog Group Item Detail {catalogGroupItemId} - {catalogGroupItemDetailId}</h1>
            <Button>Click me</Button>
        </div>
    );
}