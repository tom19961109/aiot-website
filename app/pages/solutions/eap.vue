<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.eap_title')"
      :description="$t('solutions.eap_description')"
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
const contentStem = computed(() => `solutions/${locale.value}/1.eap`)

const { data: postValue } = await useAsyncData(
  () => `solutions-eap-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('solutions.eap_title')
const description = t('solutions.eap_description')

const schemaDescription = computed(() => {
  const paragraph = postValue.value?.body?.value.find(
    (node) => Array.isArray(node) && node[0] === 'p' && getContentText(node).includes('SECS/GEM')
  )
  return paragraph ? getContentText(paragraph).trim() : t('solutions.eap_description')
})

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/solutions/eap')}`)

useHead(() => ({
  script: [
    {
      key: 'eap-schema',
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
