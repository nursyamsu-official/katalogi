import { z } from "zod";

export const catalogGroupHeaderUpdateSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1).optional(),
    description: z.string().optional(),
});