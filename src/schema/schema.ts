import { z } from "astro/zod";

const tagsSchema = z.enum(["general", "courses"]);
export const blogSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  genre: tagsSchema,
  // TODO: make this as a date
  pubDate: z.string(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type Tags = z.infer<typeof tagsSchema>;
