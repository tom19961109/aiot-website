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
          :components="{ PictureAndText }"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import PictureAndText from '~/components/content/PictureAndText.vue'

const { t, locale } = useI18n()
const contentStem = computed(() => `solutions/${locale.value}/2.rcm`)

const { data: postValue } = await useAsyncData(
  () => `solutions-rcm-${locale.value}`,
  () => queryCollection('content').where('stem', '=', contentStem.value).first()
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
