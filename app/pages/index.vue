<script setup lang="ts">
import SolutionBlogPosts from '~/components/Index/SolutionBlogPosts.vue'
import semiWaMaImage from '~/assets/images/SemiWaMa.png'
import osatImage from '~/assets/images/OSAT.png'
import icImage from '~/assets/images/IC.png'
import pcbImage from '~/assets/images/PCB.png'
import lcdImage from '~/assets/images/LCD.png'
import elecImage from '~/assets/images/ElecCoMa.png'

const { data: page } = await useAsyncData('index', () => queryCollection('index').first())

const { t } = useI18n()

const title = computed(() => {
  const titleKey = page.value?.seo?.title || page.value?.title
  return titleKey ? t(titleKey) : undefined
})
// const description = page.value?.seo?.description || page.value?.description
const description = computed(() => {
  const descriptionKey = page.value?.seo?.description || page.value?.description
  return descriptionKey ? t(descriptionKey) : undefined
})

/** 主視覺標題 */
const bannerTitle = computed(() =>
  page.value?.banner_title ? t(page.value.banner_title) : page.value?.banner_title
)

/** 主視覺描述 */
const bannerDescription = computed(() =>
  page.value?.banner_description ? t(page.value.banner_description) : page.value?.banner_description
)

/** 核心解決方案 標題 */
const featuresTitle = computed(() =>
  page.value?.features.title ? t(page.value.features.title) : page.value?.features.title
)

/** 服務產業 標題 */
const industriesTitle = computed(() =>
  page.value?.industries.title ? t(page.value.industries.title) : page.value?.industries.title
)

/** 服務產業 描述 */
const industriesDescription = computed(() =>
  page.value?.industries.description
    ? t(page.value.industries.description)
    : page.value?.industries.description
)

const semiTitle = t('industries.semi_title')
console.log('semiTitle', semiTitle)

const industrieList = computed(() => [
  {
    title: page.value?.industries.semi_title
      ? t(page.value.industries.semi_title)
      : t('industries.semi_title'),
    src: semiWaMaImage
  },
  {
    title: page.value?.industries.osat_title
      ? t(page.value.industries.osat_title)
      : t('industries.osat_title'),
    src: osatImage
  },
  {
    title: page.value?.industries.ic_title
      ? t(page.value.industries.ic_title)
      : t('industries.ic_title'),
    src: icImage
  },
  {
    title: page.value?.industries.pcb_title
      ? t(page.value.industries.pcb_title)
      : t('industries.pcb_title'),
    src: pcbImage
  },
  {
    title: page.value?.industries.lcd_title
      ? t(page.value.industries.lcd_title)
      : t('industries.lcd_title'),
    src: lcdImage
  },
  {
    title: page.value?.industries.elec_title
      ? t(page.value.industries.elec_title)
      : t('industries.elec_title'),
    src: elecImage
  }
])

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,

  // TODO:要找完成的首頁圖片取代
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/saas-light.png'
})
</script>

<!-- :links="page.hero.links" -->
<template>
  <div v-if="page">
    <UPageHero
      :description="bannerDescription"
      :ui="{ title: 'text-3xl sm:text-4xl lg:text-6xl' }"
    >
      <template #top>
        <HeroBackground />
      </template>
      <template #title>
        <MDC
          :value="bannerTitle || ''"
          unwrap="p"
        />
      </template>

      <!-- <PromotionalVideo /> -->
      <ImageBanner />
    </UPageHero>

    <!-- 核心解決方案 -->
    <UPageSection :title="featuresTitle">
      <SolutionBlogPosts :solutions="page.features.solutions" />
    </UPageSection>

    <!-- 服務產業 -->
    <UPageSection
      id="industries"
      :title="industriesTitle"
      :description="industriesDescription"
    >
      <UPageGrid class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
        <UPageCard
          v-for="item in industrieList"
          :key="item.title"
          :title="item.title"
          orientation="vertical"
          spotlight
          spotlight-color="primary"
          :ui="{ title: 'text-center' }"
        >
          <img
            :src="item.src"
            :alt="item.title"
          >
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <USeparator />
  </div>
</template>
