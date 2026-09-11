<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const uiLocale = computed(() => locales[locale.value as keyof typeof locales] ?? locales.en)

const colorMode = useColorMode()

const color = computed(() => (colorMode.value === 'dark' ? '#020618' : 'white'))

const { data: page } = await useAsyncData('index', () => queryCollection('index').first())
const { t } = useI18n()
const title = computed(() => (page.value?.seo?.title ? t(page.value.seo.title) : page.value?.title))

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: () => `%s - ${title.value}`,
  twitterCard: 'summary_large_image'
})

const { data: navigation } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation('docs'),
  {
    transform: data => data.find(item => item.path === '/docs')?.children || []
  }
)

const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

provide('navigation', navigation)
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
