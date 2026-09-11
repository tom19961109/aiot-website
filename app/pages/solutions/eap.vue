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
const { t, locale } = useI18n()
const contentPath = computed(() =>
  locale.value === 'zh-TW' ? '/solutions/eap' : `/${locale.value}/solutions/eap`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-eap-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.eap_title')
const description = t('solutions.eap_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
