<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.rcm_title')"
      :description="$t('solutions.rcm_description')"
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
  locale.value === 'zh-TW' ? '/solutions/rcm' : `/${locale.value}/solutions/rcm`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-rcm-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.rcm_title')
const description = t('solutions.rcm_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
