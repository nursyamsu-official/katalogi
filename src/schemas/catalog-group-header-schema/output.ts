import { z } from "zod";

export const catalogGroupHeaderOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const catalogGroupHeaderOutputWithItemsSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  items: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
});
