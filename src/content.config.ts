import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { blogSchema } from "./schema/schema";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/", pattern: "**/*.md" }),
  // Type-check frontmatter using a schema
  schema: blogSchema,
});

export const collections = { blog };
