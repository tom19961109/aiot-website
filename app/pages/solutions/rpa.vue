<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.rpa_title')"
      :description="$t('solutions.rpa_description')"
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
const contentStem = computed(() => `solutions/${locale.value}/3.rpa`)

const { data: postValue } = await useAsyncData(
  () => `solutions-rpa-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('solutions.rpa_title')
const description = t('solutions.rpa_description')

/**
 * 找關鍵字OCR並得出一段文字
 * @param nodes
 */
function findOcrParagraph(nodes: unknown[]): string | undefined {
  for (const node of nodes) {
    if (!Array.isArray(node)) continue
    if (node[0] === 'p') {
      const text = getContentText(node).trim()
      if (text.includes('OCR')) return text
    }
    const paragraph = findOcrParagraph(node.slice(2))
    if (paragraph) return paragraph
  }
}

const findResult = findOcrParagraph(postValue.value?.body?.value ?? [])
const schemaDescription = computed(
  () => t('solutions.rpa_description') + findResult || t('solutions.rpa_description')
)

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/solutions/rpa')}`)

useHead(() => ({
  script: [
    {
      key: 'rpa-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: `${t('seo.index.title')}-${title}`,
        description: schemaDescription.value,

        inLanguage: locale.value,
        isPartOf: {
          '@id': 'https://www.aie-tec.com.tw/#website'
        },
        publisher: {
          '@id': 'https://www.aie-tec.com.tw/#organization'
        }
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
