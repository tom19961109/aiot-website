<template>
  <UContainer>
    <UPageHeader
      :title="t('blog.title')"
      :description="t('blog.description')"
      class="py-[50px]"
    />

    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="
            localePath({ name: 'blog-slug', params: { slug: post.path.split('/').pop() } }, locale)
          "
          :title="post.title"
          :description="post.description"
          :image="
            post.image?.src
              ? { ...post.image, src: post.image.src.replace(/^\/?images\//, '/images/') }
              : undefined
          "
          :date="
            new Date(post.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            })
          "
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const { data: posts } = await useAsyncData(
  computed(() => `posts-${locale.value.toLowerCase()}`),
  () =>
    queryCollection('posts').where('path', 'LIKE', `/blog/${locale.value.toLowerCase()}/%`).all()
)

const title = t('blog.title')
const description = t('blog.description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/blog')}`)

useHead(() => ({
  script: [
    {
      key: 'blog-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: title,
        description: description,
        inLanguage: locale.value,
        isPartOf: {
          '@id': 'https://www.aie-tec.com.tw/#website'
        },
        publisher: {
          '@id': 'https://www.aie-tec.com.tw/#organization'
        },
        breadcrumb: {
          '@id': `${pageUrl.value}#breadcrumb`
        }
      }).replace(/</g, '\\u003c')
    },
    {
      key: 'blog-breadcrumb-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl.value}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: t('seo.index.title'),
            item: `https://www.aie-tec.com.tw${localePath('/')}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'AIE Blog',
            item: pageUrl.value
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
