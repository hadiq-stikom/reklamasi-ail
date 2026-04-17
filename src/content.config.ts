import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define a placeholder collection to ensure Astro's type generator has a valid schema.
const dummy = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dummy" }),
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = { dummy };
