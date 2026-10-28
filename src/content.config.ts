import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rehber = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rehber' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    city: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { rehber };
