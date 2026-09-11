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
const { t, locale } = useI18n()
const contentPath = computed(() =>
  locale.value === 'zh-TW' ? '/solutions/rpa' : `/${locale.value}/solutions/rpa`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-rpa-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.rpa_title')
const description = t('solutions.rpa_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
