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
const contentStem = computed(() =>
  `solutions/${locale.value}/1.eap`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-eap-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
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
