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
</script>
