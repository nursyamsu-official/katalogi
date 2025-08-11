import { z } from "zod";

export const catalogGroupItemOutputSchema = z.object({
    id: z.string(),
    level: z.number(),
    parentId: z.string().optional(),
    code: z.string(),
    name: z.string(),
    description: z.string().optional(),
    groupId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});