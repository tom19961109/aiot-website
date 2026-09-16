<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.spc_title')"
      :description="$t('solutions.spc_description')"
    />

    <UPage>
      <UPageBody>
        <ContentRenderer
          v-if="postValue"
          :value="postValue"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import { getContentText } from '~~/utils/common'

const { t, locale } = useI18n()
const contentStem = computed(() => `solutions/${locale.value}/4.spc`)

const { data: postValue } = await useAsyncData(
  () => `solutions-spc-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('solutions.spc_title')
const description = t('solutions.spc_description')

function findXBarParagraph(nodes: unknown[]): string | undefined {
  for (const node of nodes) {
    if (!Array.isArray(node)) continue
    if (node[0] === 'p') {
      const text = getContentText(node).trim()
      if (text.includes('X-Bar')) return text
    }
    const paragraph = findXBarParagraph(node.slice(2))
    if (paragraph) return paragraph
  }
}

const findResult = findXBarParagraph(postValue.value?.body?.value ?? [])
const schemaDescription = computed(() => description + findResult || description)

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/solutions/spc')}`)

useHead(() => ({
  script: [
    {
      key: 'spc-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: `${t('seo.index.title')}-${title}`,
        description: schemaDescription.value, // TODO:可以再加 3.spc.md 內包含OCR的一段文字嗎?

        inLanguage: locale.value,
        isPartOf: {
          '@id': 'https://www.aie-tec.com.tw/#website'
        },
        publisher: {
          '@id': 'https://www.aie-tec.com.tw/#organization'
        }
      }).replace(/</g, '\\u003c')
    },

    {
      key: 'spc-breadcrumb-schema',
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
            name: t('solutions.spc_title'),
            item: pageUrl.value
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
