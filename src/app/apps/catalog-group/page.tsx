import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Catalog Group",
    description: "Catalog Group",
}

export default function CatalogGroupPage() {
    return (
        <div>
            <h1>Catalog Group</h1>
            <Button>Click me</Button>
        </div>
    );
}