import { prismaInstantiate } from "@/lib/prisma-instantiate";

export const getCatalogGroupHeadersDb = async () => {
  const data = await prismaInstantiate.catalogGroupHeader.findMany();
  return data;
};

export const getCatalogGroupHeaderByIdDb = async (id: string) => {
  const data = await prismaInstantiate.catalogGroupHeader.findUnique({
    where: { id },
  });
  return data;
};

export const getCatalogGroupHeadersWithItemsDb = async () => {
  const data = await prismaInstantiate.catalogGroupHeader.findMany({
    include: {
      items: true,
    },
  });
  return data;
};

export const getCatalogGroupHeaderByIdWithItemsDb = async (id: string) => {
  const data = await prismaInstantiate.catalogGroupHeader.findUnique({
    where: { id },
    include: {
      items: true,
    },
  });
  return data;
};
