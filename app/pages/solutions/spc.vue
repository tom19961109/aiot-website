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
const contentStem = computed(() =>
  `solutions/${locale.value}/4.spc`
)


const { data: postValue } = await useAsyncData(
  () => `solutions-spc-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
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
