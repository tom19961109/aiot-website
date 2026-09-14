<template>
  <UPageSection
    :title="t('aboutUs.title')"
    description=""
    :features="features"
    class="bg-linear-to-b from-primary-500/10 via-transparent to-primary-500/20"
  />
</template>

<script setup lang="ts">
import type { PageFeatureProps } from '@nuxt/ui'

const { t } = useI18n()

const features = ref<PageFeatureProps[]>([
  {
    title: t('aboutUs.company_introduction'),
    description: t('aboutUs.company_introduction_description'),
    icon: 'fluent-mdl2:company-directory'
  },
  {
    title: t('aboutUs.all_in'),
    ui: { description: 'whitespace-pre-line' },
    description: t('aboutUs.all_in_description'),
    icon: 'maki:charging-station'
  },
  {
    title: t('aboutUs.AI_decision'),
    description: t('aboutUs.AI_decision_description'),
    icon: 'carbon:ai-recommend'
  }
])

useSeoMeta({
  titleTemplate: '',
  title: t('aboutUs.title'),
  ogTitle: t('aboutUs.title'),
  description: `${t('aboutUs.company_introduction_description')},${t('aboutUs.all_in')},${t('aboutUs.AI_decision')}`,
  ogDescription: `${t('aboutUs.company_introduction_description')},${t('aboutUs.all_in')},${t('aboutUs.AI_decision')}`
})
</script>
