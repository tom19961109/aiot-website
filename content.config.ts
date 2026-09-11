import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const createBaseSchema = () =>
  z.object({
    title: z.string().nonempty(),
    description: z.string().nonempty()
  })

const createFeatureItemSchema = () =>
  createBaseSchema().extend({
    icon: z.string().nonempty().editor({ input: 'icon' })
  })

const createLinkSchema = () =>
  z.object({
    label: z.string().nonempty(),
    to: z.string().nonempty(),
    icon: z.string().optional().editor({ input: 'icon' }),
    size: sizeEnum.optional(),
    trailing: z.boolean().optional(),
    target: z.string().optional(),
    color: colorEnum.optional(),
    variant: variantEnum.optional()
  })

// const createImageSchema = () =>
//   z.object({
//     src: z.string().nonempty().editor({ input: 'media' }),
//     alt: z.string().optional(),
//     loading: z.enum(['lazy', 'eager']).optional(),
//     srcset: z.string().optional()
//   })

export const collections = {
  index: defineCollection({
    source: '0.index.yml',
    type: 'page',
    schema: z.object({
      banner_title: z.string().nonempty(),
      banner_description: z.string().nonempty(),

      sections: z.array(
        createBaseSchema().extend({
          id: z.string().nonempty(),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      features: createBaseSchema().extend({
        title: z.string().nonempty(),
        solutions: z.object({
          eap_title: z.string().nonempty(),
          eap_description: z.string().nonempty(),
          rcm_title: z.string().nonempty(),
          rcm_description: z.string().nonempty(),
          rpa_title: z.string().nonempty(),
          rpa_description: z.string().nonempty(),
          spc_title: z.string().nonempty(),
          spc_description: z.string().nonempty(),
          aidc_title: z.string().nonempty(),
          aidc_description: z.string().nonempty(),
          aiot_title: z.string().nonempty(),
          aiot_description: z.string().nonempty()
        }),
        items: z.array(createFeatureItemSchema())
      }),
      industries: createBaseSchema().extend({
        semi_title: z.string().nonempty(),
        osat_title: z.string().nonempty(),
        ic_title: z.string().nonempty(),
        lcd_title: z.string().nonempty(),
        pcb_title: z.string().nonempty(),
        elec_title: z.string().nonempty(),
        items: z.array(
          z.object({
            title: z.string().nonempty(),
            imgUrl: z.string().nonempty()
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  solutions: defineCollection({
    source: [
      { include: '5.solutions/zh-TW/**/*.md', prefix: '/solutions' },
      { include: '5.solutions/en/**/*.md', prefix: '/en/solutions' },
      { include: '5.solutions/ja/**/*.md', prefix: '/ja/solutions' }
    ],
    type: 'page'
  }),
  docs: defineCollection({
    source: '1.docs/**/*',
    type: 'page'
  }),
  pricing: defineCollection({
    source: '2.pricing.yml',
    type: 'page',
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().nonempty(),
          description: z.string().nonempty(),
          price: z.object({
            month: z.string().nonempty(),
            year: z.string().nonempty()
          }),
          billing_period: z.string().nonempty(),
          billing_cycle: z.string().nonempty(),
          button: createLinkSchema(),
          features: z.array(z.string().nonempty()),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().nonempty(),
        icons: z.array(z.string())
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().nonempty(),
            content: z.string().nonempty()
          })
        )
      })
    })
  }),
  blog: defineCollection({
    source: '3.blog.yml',
    type: 'page'
  }),
  posts: defineCollection({
    source: '3.blog/**/*',
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
  }),
  changelog: defineCollection({
    source: '4.changelog.yml',
    type: 'page'
  }),
  versions: defineCollection({
    source: '4.changelog/**/*',
    type: 'page',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string(),
      date: z.date(),
      image: z.string()
    })
  })
}
