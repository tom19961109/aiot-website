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
const contentPath = computed(() =>
  locale.value === 'zh-TW' ? '/solutions/aidc' : `/${locale.value}/solutions/aidc`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-aidc-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.aidc_title')
const description = t('solutions.aidc_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
