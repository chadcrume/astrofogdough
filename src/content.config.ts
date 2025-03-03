// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const portfolios = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/portfolio" }),
    schema: z.object({
        name: z.string(),
        status: z.enum(['Active', 'Inactive']),
        stage: z.optional(z.enum(['First round', 'Second round', 'Exited'])),
        image: z.string(),
        // type: z.enum(['Space Probe', 'Mars Rover', 'Comet Lander']),
        // launch_date: z.date(),
        // destination: z.string(),
        // operator: z.string(),
        // notable_discoveries: z.array(z.string()),
      })
});

const people = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/people" }),
    schema: z.object({
        first_name: z.string(),
        last_name: z.string(),
        title: z.string(),
        image: z.string(),
        status: z.enum(['Active', 'Inactive']),
      })
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { portfolios, people };