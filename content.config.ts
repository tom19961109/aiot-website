import { defineCollection, z } from '@nuxt/content'

export const collections = {
  industries: defineCollection({
    source: 'industries/**/*.md',
    type: 'page'
  }),
  solutions: defineCollection({
    source: 'solutions/**/*.md',
    type: 'page'
  }),

  blog: defineCollection({
    source: 'blog/**/*.md',
    type: 'page'
  }),
  posts: defineCollection({
    source: 'blog/**/*.md',
    type: 'page',
    schema: z.object({
      image: z.object({ src: z.string().nonempty().editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().nonempty(),
          to: z.string().nonempty(),
          avatar: z.object({ src: z.string().nonempty().editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().nonempty() })
    })
  })
}
