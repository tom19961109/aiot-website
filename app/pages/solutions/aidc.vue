<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.aidc_title')"
      :description="$t('solutions.aidc_description')"
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
const { t, locale } = useI18n()

const contentStem = computed(() => `solutions/${locale.value}/5.aidc`)

const { data: postValue } = await useAsyncData(
  () => `solutions-aidc-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('solutions.aidc_title')
const description = t('solutions.aidc_description')

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/solutions/aidc')}`)

useHead(() => ({
  script: [
    {
      key: 'aidc-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: `${t('seo.index.title')}-${title}`,
        description: description,
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
      key: 'aidc-breadcrumb-schema',
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
            name: t('solutions.aidc_title'),
            item: pageUrl.value
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
