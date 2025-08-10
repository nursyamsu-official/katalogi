import { prismaInstantiate } from "@/lib/prisma-instantiate";

export const getCatalogGroups = async () => {
  const catalogGroups = await prismaInstantiate.catalogGroupHeader.findMany({
    include: {
      items: true,
    },
  });
  return catalogGroups;
};
