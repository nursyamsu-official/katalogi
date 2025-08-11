import { z } from "zod";

export const catalogGroupHeaderInputSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
});