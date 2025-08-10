import { z } from "zod";

export const catalogGroupItemInputSchema = z.object({
    level: z.number().min(1).max(3),
    parentId: z.string().optional(),
    code: z.string().min(1),
    name: z.string().min(1),
    description: z.string().optional(),
    groupId: z.string().min(1),
});