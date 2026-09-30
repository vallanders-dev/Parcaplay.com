import { defineCollection, z } from 'astro:content';

// News posts live in src/content/news/{pt,en}/*.md
// `date` is a plain YYYY-MM-DD string in Brasília time (America/Sao_Paulo).
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    summary: z.string(),
    version: z.string().optional(),
  }),
});

export const collections = { news };
