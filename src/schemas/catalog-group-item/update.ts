import { z } from "zod";

export const catalogGroupItemUpdateSchema = z.object({
    id: z.string().min(1),
    level: z.number().min(1).max(3).optional(),
    parentId: z.string().optional(),
    code: z.string().min(1).optional(),
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    groupId: z.string().min(1).optional(),
});