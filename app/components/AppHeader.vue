<template>
  <UHeader
    v-model:open="open"
    :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }"
  >
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

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
    </template>

    <UNavigationMenu :items="items" />

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
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import type { SelectItem } from '@nuxt/ui'
import { useMediaQuery } from '@vueuse/core'

const route = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const open = ref(false)

const { t } = useI18n()

/** 選單項目 */
const items = computed(() => [
  {
    label: t('solutions.title'),
    to: '/solutions',
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
  },
  {
    label: t('industries.title'),
    to: '/industries'
  },
  {
    label: t('contactUs.title'),
    to: '/contactUs'
  },
  {
    label: t('aboutUs.main_title'),
    to: '/aboutUs'
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
