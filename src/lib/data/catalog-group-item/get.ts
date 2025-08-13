import { prismaInstantiate } from "@/lib/prisma-instantiate";

export const getCatalogGroupItemsDb = async () => {
    const data = await prismaInstantiate.catalogGroupItem.findMany();
    return data;
}

export const getCatalogGroupItemsByGroupIdDb = async (groupId: string) => {
    const data = await prismaInstantiate.catalogGroupItem.findMany({
        where: {
            groupId: groupId,
        },
    });
    return data;
}
