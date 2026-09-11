<script setup>
import { SITE_URL, getAlternateLinks, getLocaleContent } from '~/utils/site-content'

const route = useRoute()
const locale = computed(() => String(route.params.locale || 'zh'))
const content = computed(() => getLocaleContent(locale.value))

if (!content.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const canonicalUrl = computed(() => `${SITE_URL}${content.value.code}/`)
const schema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '安智聯科技有限公司',
  alternateName: ['安智聯', '安智聯科技'],
  url: canonicalUrl.value,
  description: content.value.schemaDescription,
  knowsAbout: content.value.knowsAbout
}))

useSeoMeta({
  title: () => content.value.title,
  description: () => content.value.description,
  keywords: () => content.value.keywords.join(','),
  ogType: 'website',
  ogLocale: () => content.value.ogLocale,
  ogSiteName: '安智聯科技有限公司',
  ogTitle: () => content.value.title,
  ogDescription: () => content.value.ogDescription,
  ogUrl: () => canonicalUrl.value,
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: () => content.value.htmlLang
  },
  link: [
    { rel: 'canonical', href: () => canonicalUrl.value },
    ...getAlternateLinks()
  ],
  script: [
    {
      type: 'application/ld+json',
      children: () => JSON.stringify(schema.value)
    }
  ]
})
</script>

<template>
  <div>
    <header class="site-header">
      <NuxtLink class="brand" :to="`/${content.code}/`">安智聯科技</NuxtLink>
      <nav class="language-nav" :aria-label="content.languageLabel">
        <NuxtLink
          v-for="language in content.languages"
          :key="language.code"
          :to="`/${language.code}/`"
          :hreflang="language.hreflang"
          :aria-current="language.code === content.code ? 'page' : undefined"
        >
          {{ language.shortLabel }}
        </NuxtLink>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">{{ content.eyebrow }}</p>
          <h1>{{ content.heading }}</h1>
          <p>{{ content.summary }}</p>
        </div>
      </section>

      <section class="solutions" aria-labelledby="solutions-title">
        <div class="section-heading">
          <p class="eyebrow">Core Solutions</p>
          <h2 id="solutions-title">{{ content.solutionsTitle }}</h2>
        </div>
        <div class="solution-grid">
          <article v-for="solution in content.solutions" :key="solution.title">
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
