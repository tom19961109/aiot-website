<template>
  <UHeader v-model:open="open">
    <template #left>
      <NuxtLink
        to="/"
        class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
      >
        <img
          src="~/assets/logo.png"
          alt="AIoT"
          class="w-auto h-10 shrink-0"
        />
      </NuxtLink>
      <!-- <TemplateMenu /> -->
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <USelect
        v-model="selectedLang"
        :items="langItems"
        :size="isLargeScreen ? 'md' : 'xs'"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { SelectItem } from '@nuxt/ui'
import { useMediaQuery } from '@vueuse/core'

const route = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const open = ref(true)

const { t } = useI18n()

// const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

// /** 核心解決方案 標題 */
// const featuresTitle = computed(() =>
//   page.value?.features.title ? t(page.value.features.title) : page.value?.features.title
// )

/** 選單項目 */
const items = computed(() => [
  // {
  //   label: 'Docs',
  //   to: '/docs',
  //   active: isDocs.value
  // },
  // {
  //   label: 'Pricing',
  //   to: '/pricing'
  // },
  // {
  //   label: 'Blog',
  //   to: '/blog'
  // },
  // {
  //   label: 'Changelog',
  //   to: '/changelog'
  // },
  {
    label: t('solutions.title'),
    // to: '/solutions',
    children: [
      {
        label: t('solutions.eap_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/eap'
      },
      {
        label: t('solutions.rcm_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/rcm'
      },
      {
        label: t('solutions.rpa_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/rpa'
      },
      {
        label: t('solutions.spc_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/spc'
      },
      {
        label: t('solutions.aidc_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/aidc'
      },
      {
        label: t('solutions.aiot_title'),
        // icon: 'i-lucide-file-text',
        to: '/solutions/aiot'
      }
    ]
  }
])

const { locale, setLocale } = useI18n()

/** 選取的語系 */
const selectedLang = ref(locale.value)

watch(selectedLang, async (value) => {
  await setLocale(value)
})

watch(
  () => route.path,
  (path) => {
    const lang = path.split('/')[1]
    selectedLang.value = lang === 'en' || lang === 'ja' ? lang : 'zh-TW'
  },
  { immediate: true }
)

/** 語言選項 */
const langItems = ref<SelectItem[]>([
  {
    label: '繁體中文',
    value: 'zh-TW'
  },
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '日本語',
    value: 'ja'
  }
])
</script>
