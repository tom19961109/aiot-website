<script setup lang="ts">
import SolutionBlogPosts from '~/components/Index/SolutionBlogPosts.vue'
import semiWaMaImage from '~/assets/images/SemiWaMa.png'
import osatImage from '~/assets/images/OSAT.png'
import icImage from '~/assets/images/IC.png'
import pcbImage from '~/assets/images/PCB.png'
import lcdImage from '~/assets/images/LCD.png'
import elecImage from '~/assets/images/ElecCoMa.png'
import ImageBanner from '~/components/Index/ImageBanner.vue'

const { t } = useI18n()

/** 服務產業 列表 */
const industrieList = computed(() => [
  {
    title: t('industries.semi_title'),
    src: semiWaMaImage
  },
  {
    title: t('industries.osat_title'),
    src: osatImage
  },
  {
    title: t('industries.ic_title'),
    src: icImage
  },
  {
    title: t('industries.pcb_title'),
    src: pcbImage
  },
  {
    title: t('industries.lcd_title'),
    src: lcdImage
  },
  {
    title: t('industries.elec_title'),
    src: elecImage
  }
])

useSeoMeta({
  titleTemplate: '',
  title: t('seo.index.title'),
  ogTitle: t('seo.index.title'),
  description: t('seo.index.description'),
  ogDescription: t('seo.index.description'),

  // TODO:要找完成的首頁圖片取代
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/saas-light.png'
})
</script>

<template>
  <UPageHero
    :title="$t('banner_title')"
    :description="$t('banner_description')"
    :ui="{ title: 'text-3xl sm:text-4xl lg:text-6xl' }"
  >
    <template #top>
      <HeroBackground />
    </template>
    <ImageBanner />
  </UPageHero>

  <!-- 核心解決方案 -->
  <UPageSection :title="$t('solutions.title')">
    <SolutionBlogPosts />
  </UPageSection>

  <!-- 服務產業 -->
  <UPageSection
    id="industries"
    :title="$t('industries.title')"
    :description="$t('industries.description')"
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
        to="/industries"
      >
        <img
          :src="item.src"
          :alt="item.title"
        />
      </UPageCard>
    </UPageGrid>
  </UPageSection>

  <USeparator />
</template>
