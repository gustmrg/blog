import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
});

const postsEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/en" }),
  schema: postsSchema,
});

const postsPtBr = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/pt-br" }),
  schema: postsSchema,
});

export const collections = { postsEn, postsPtBr };
