import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: '**/blog/*.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        translationKey: z.string(),
        contentLocale: z.enum(['tr', 'en']),
        description: z.string(),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        date: z.string(),
        updatedAt: z.string().optional(),
        category: z.string(),
        author: z.string().optional(),
        readingTime: z.string().optional(),
        coverImage: z.string().optional(),
        images: z
          .array(
            z.object({
              src: z.string(),
              alt: z.string(),
              caption: z.string().optional()
            })
          )
          .optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})