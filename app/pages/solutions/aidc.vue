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

const contentStem = computed(() => `solutions/${locale.value}/1.eap`)

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
</script>
