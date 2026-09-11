<template>
  <UContainer>
    <UPageHeader
      :title="$t('solutions.aiot_title')"
      :description="$t('solutions.aiot_description')"
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
  locale.value === 'zh-TW' ? '/solutions/aiot' : `/${locale.value}/solutions/aiot`
)

const { data: postValue } = await useAsyncData(
  () => `solutions-aiot-${locale.value}`,
  () => queryCollection('solutions').path(contentPath.value).first()
)

const title = t('solutions.aiot_title')
const description = t('solutions.aiot_description')

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>
