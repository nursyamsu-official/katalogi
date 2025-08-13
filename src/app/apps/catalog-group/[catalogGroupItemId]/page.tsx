import { Button } from "@/components/ui/button";
import { Eye, PlusIcon } from "lucide-react";
import { getCatalogGroupHeaderByIdWithItemsDb } from "@/lib/data/catalog-group-header-db";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export async function generateMetadata({ params }: {
    params: Promise<{ catalogGroupItemId: string }>
}) {
    const { catalogGroupItemId } = await params;
    const catalogGroupHeaderWithItems = await getCatalogGroupHeaderByIdWithItemsDb(catalogGroupItemId);
    return {
        title: `Catalog Group ${catalogGroupHeaderWithItems?.name.toUpperCase()}`,
    }
}

export default async function CatalogGroupItemIdPage({ params }: {
    params: Promise<{ catalogGroupItemId: string }>
}) {
    const { catalogGroupItemId } = await params;
    const catalogGroupHeaderWithItems = await getCatalogGroupHeaderByIdWithItemsDb(catalogGroupItemId);
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-300 pt-4 pb-4">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
                    Catalog Group <span className="text-primary">{catalogGroupHeaderWithItems?.name.toUpperCase()}
                    </span>
                </h1>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <PlusIcon className="w-4 h-4" />
                    <span className="hidden sm:block">Add Catalog Group</span>
                </Button>
            </div>
            <div className="pt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>ID</TableHead>
                            <TableHead>Parent ID</TableHead>
                            <TableHead>Level</TableHead>
                            <TableHead>Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {catalogGroupHeaderWithItems?.items.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.parentId}</TableCell>
                                <TableCell>{item.level}</TableCell>
                                <TableCell>{item.code}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>
                                    <Link href={`/apps/catalog-group/${catalogGroupItemId}/${item.id}`}>
                                        <Eye className="w-4 h-4" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}