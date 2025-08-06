import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Feature",
    description: "Feature",
}

export default function FeaturePage() {
    return (
        <div>
            <h1>Feature</h1>
            <Button>Click me</Button>
            <div className="flex flex-col gap-2 ">
                {[...Array(50)].map((_, i) => (
                    <div key={i}>Data ke-{i + 1}</div>
                ))}
            </div>
        </div>
    );
}