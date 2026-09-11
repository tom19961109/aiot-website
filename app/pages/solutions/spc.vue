<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.spc_title')"
      :description="$t('solutions.spc_description')"
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
  locale.value === 'zh-TW' ? '/solutions/spc' : `/${locale.value}/solutions/spc`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-spc-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.spc_title')
const description = t('solutions.spc_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
