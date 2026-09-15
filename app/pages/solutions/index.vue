<template>
  <UContainer>
    <UPageHeader
      :title="`${t('solutions.title')}-${t('solutions.system_integration')}`"
      :description="$t('solutions.system_integration_description')"
    />

    <UPage>
      <UPageBody>
        <ContentRenderer
          v-if="postValue"
          :value="postValue"
        />
      </UPageBody>

      <!-- 核心解決方案 -->
      <UPageSection :title="$t('solutions.title')">
        <SolutionBlogPosts />
      </UPageSection>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import SolutionBlogPosts from '~/components/Index/SolutionBlogPosts.vue'

const { t, locale } = useI18n()
const contentStem = computed(() => `solutions/${locale.value}/7.integration`)

const { data: postValue } = await useAsyncData(
  () => `solutions-integration-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('solutions.system_integration')
const description = t('solutions.system_integration_description')

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/solutions')}`)

useHead(() => ({
  script: [
    {
      key: 'solutions-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': `${pageUrl.value}#webpage`,
            url: pageUrl.value,
            name: `${t('seo.index.title')}-${t('solutions.system_integration')}`,
            description: t('solutions.system_integration_description'),
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
          },

          {
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
                name: t('solutions.title'),
                item: pageUrl.value
              }
            ]
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
