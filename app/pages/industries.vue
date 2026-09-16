<template>
  <UContainer>
    <UPageHeader
      :title="t('industries.title')"
      :description="t('industries.description')"
    >
    </UPageHeader>

    <UPage>
      <UPageBody>
        <ContentRenderer
          v-if="postValue"
          :value="postValue"
        />
      </UPageBody>

      <template
        v-if="postValue?.body?.toc?.links?.length"
        #right
      >
        <UContentToc :links="postValue.body.toc.links" />
      </template>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const contentStem = computed(() => `industries/${locale.value}/index`)

const { data: postValue } = await useAsyncData(
  () => `industries-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
)

const title = t('industries.title')
const description = `${t('industries.description')},
${t('industries.semi_title')},
${t('industries.osat_title')},
${t('industries.ic_title')},
${t('industries.pcb_title')},
${t('industries.lcd_title')},
${t('industries.elec_title')}`

useSeoMeta({
  title: `${t('seo.index.title')}-${title}`,
  ogTitle: `${t('seo.index.title')}-${title}`,
  description,
  ogDescription: description
})

const localePath = useLocalePath()
const pageUrl = computed(() => `https://www.aie-tec.com.tw${localePath('/industries')}`)

useHead(() => ({
  script: [
    {
      key: 'industries-schema',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${pageUrl.value}#webpage`,
        url: pageUrl.value,
        name: `${t('seo.index.title')}-${t('industries.title')}`,
        description: t('industries.description'),
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
      key: 'industries-breadcrumb-schema',
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
            name: t('industries.title'),
            item: pageUrl.value
          }
        ]
      }).replace(/</g, '\\u003c')
    }
  ]
}))
</script>
