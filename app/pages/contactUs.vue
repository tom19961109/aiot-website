<template>
  <UTabs
    color="neutral"
    variant="link"
    :content="true"
    :items="items"
    class="w-full"
  >
    <template #Taoyuan="{ item }">
      <UPageCard
        :title="t('contactUs.Taoyuan')"
        orientation="horizontal"
        spotlight
        spotlight-color="primary"
        class="m-[10px] text-center"
        :ui="{
          wrapper: 'items-stretch',
          description: 'text-center'
        }"
      >
        <template #description>
          <div>
            <ul class="contact space-y-3 text-default">
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-map-pin"
                  class="mt-0.5 size-5 shrink-0"
                />
                {{ $t('contactUs.address') }}:
                <a
                  v-if="locale === 'zh-TW'"
                  href="https://www.google.com/maps/search/?api=1&query=330桃園市桃園區文明里復興路205號"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  桃園市桃園區復興路205號8樓之2
                </a>

                <a
                  v-if="locale === 'en'"
                  href="https://www.google.com/maps/search/?api=1&query=330桃園市桃園區文明里復興路205號"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  8F‑2, No. 205, Fuxing Road, Taoyuan District, Taoyuan City, Taiwan
                </a>

                <a
                  v-if="locale === 'ja'"
                  href="https://www.google.com/maps/search/?api=1&query=福岡県福岡市中央区荒戸三丁目253番"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  {{ t('contactUs.FukuokaAddress') }}
                </a>
              </li>
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-clock"
                  class="mt-0.5 size-5 shrink-0"
                />
                {{ $t('contactUs.business_hours') }}:
                {{ $t('contactUs.business_hours_info') }}
              </li>
              <li class="flex items-center justify-center gap-2">
                <UIcon
                  name="i-lucide-phone"
                  class="size-5 shrink-0"
                />
                {{ $t('contactUs.phone') }}:
                <a
                  href="tel:033310563"
                  class="hover:underline"
                  >03-331-0563</a
                >
              </li>
              <li class="flex items-center justify-center gap-2">
                <UIcon
                  name="i-lucide-printer"
                  class="size-5 shrink-0"
                />
                {{ $t('contactUs.fax') }}:
                <span>03-331-0573</span>
              </li>
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-mail"
                  class="mt-0.5 size-5 shrink-0"
                />
                E-mail:
                <a
                  href="mailto:stacy.yang@aie-tec.com"
                  class="break-all hover:underline"
                >
                  stacy.yang@aie-tec.com
                </a>
              </li>
            </ul>
          </div>
        </template>

        <iframe
          title="桃園總部地圖：330桃園市桃園區文明里復興路205號"
          src="https://www.google.com/maps?q=330桃園市桃園區文明里復興路205號&amp;output=embed"
          class="h-80 w-full rounded-lg border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </UPageCard>
    </template>

    <template #Fukuoka="{ item }">
      <UPageCard
        :title="t('contactUs.Fukuoka')"
        orientation="horizontal"
        spotlight
        spotlight-color="primary"
        class="m-[10px] text-center"
        :ui="{
          wrapper: 'items-stretch',
          description: 'text-center'
        }"
      >
        <template #description>
          <div>
            <ul class="contact space-y-3 text-default">
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-map-pin"
                  class="mt-0.5 size-5 shrink-0"
                />
                {{ $t('contactUs.address') }}:
                <a
                  href="https://www.google.com/maps/search/?api=1&query=福岡県福岡市中央区荒戸三丁目253番"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  福岡県福岡市中央区荒戸三丁目253番902號室
                </a>
              </li>
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-clock"
                  class="mt-0.5 size-5 shrink-0"
                />
                {{ $t('contactUs.business_hours') }}:
                {{ $t('contactUs.business_hours_info') }}
              </li>
              <li class="flex items-center justify-center gap-2">
                <UIcon
                  name="i-lucide-phone"
                  class="size-5 shrink-0"
                />
                {{ $t('contactUs.phone') }}:
                <a
                  href="tel:033310563"
                  class="hover:underline"
                  >03-331-0563</a
                >
              </li>
              <li class="flex items-center justify-center gap-2">
                <UIcon
                  name="i-lucide-printer"
                  class="size-5 shrink-0"
                />
                {{ $t('contactUs.fax') }}:
                <span>03-331-0573</span>
              </li>
              <li class="flex items-start justify-center gap-2">
                <UIcon
                  name="i-lucide-mail"
                  class="mt-0.5 size-5 shrink-0"
                />
                E-mail:
                <a
                  href="mailto:stacy.yang@aie-tec.com"
                  class="break-all hover:underline"
                >
                  stacy.yang@aie-tec.com
                </a>
              </li>
            </ul>
          </div>
        </template>

        <iframe
          title="福岡地圖：福岡県福岡市中央区荒戸三丁目253番902號"
          src="https://www.google.com/maps?q=福岡県福岡市中央区荒戸三丁目253番902號&amp;output=embed"
          class="h-80 w-full rounded-lg border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        />
      </UPageCard>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const { t, locale } = useI18n()

const items = ref<TabsItem[]>([
  {
    label: t('contactUs.Taoyuan'),
    slot: 'Taoyuan' as const,
    code: 'Taoyuan'
  },
  {
    label: t('contactUs.Fukuoka'),
    slot: 'Fukuoka' as const,
    code: 'Fukuoka'
  }
])

const description = computed(() => {
  let address = ''
  if (locale.value === 'zh-TW' || locale.value === 'en') {
    address = t('contactUs.TaoyuanAddress')
  }

  if (locale.value === 'ja') {
    address = t('contactUs.FukuokaAddress')
  }

  const email = 'E-mail:stacy.yang@aie-tec.com'
  return `${address},${email}`
})

useSeoMeta({
  title: `${t('seo.index.title')}-${t('contactUs.title')}`,
  ogTitle: `${t('seo.index.title')}-${t('contactUs.title')}`,
  description: description,
  ogDescription: description
})
</script>
