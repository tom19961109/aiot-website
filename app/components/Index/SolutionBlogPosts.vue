<template>
  <UBlogPosts>
    <UBlogPost
      v-for="(post, index) in posts"
      :key="index"
      v-bind="post"
      variant="naked"
      :ui="{
        description: 'line-clamp-2'
      }"
    >
      <template
        v-if="getHeaderImage(post.image)"
        #header="{ ui }"
      >
        <img
          :src="getHeaderImage(post.image)"
          :alt="post.title"
          data-slot="image"
          :class="ui.image()"
        />
      </template>
    </UBlogPost>
  </UBlogPosts>
</template>

<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'
import eapImage from '@/assets/images/EAP.png'
import rcmImage from '@/assets/images/RCM.png'
import rpaImage from '@/assets/images/RPA.png'
import spcImage from '@/assets/images/SPC.png'
import adcImage from '@/assets/images/ADC.png'
import aIotImage from '@/assets/images/AIOT.png'

const { t } = useI18n()

/** 取得文章用圖片 */
function getHeaderImage(image: BlogPostProps['image']): string | undefined {
  switch (image) {
    case rcmImage:
      return rcmImage
    case rpaImage:
      return rpaImage
    case eapImage:
      return eapImage
    case spcImage:
      return spcImage
    case adcImage:
      return adcImage
    case aIotImage:
      return aIotImage
    default:
      return undefined
  }
}

// TODO:還沒有放上頁面，暫時隱藏
const posts = computed<BlogPostProps[]>(() => [
  {
    title: t('solutions.eap_title'),
    description: t('solutions.eap_description'),
    image: eapImage,
    to: '/solutions/eap'
  },
  {
    title: t('solutions.rcm_title'),
    description: t('solutions.rcm_description'),
    image: rcmImage,
    to: '/solutions/rcm'
  },
  {
    title: t('solutions.rpa_title'),
    description: t('solutions.rpa_description'),
    image: rpaImage,
    to: '/solutions/rpa'
  },
  {
    title: t('solutions.spc_title'),
    description: t('solutions.spc_description'),
    image: spcImage,
    to: '/solutions/spc'
  },
  {
    title: t('solutions.aidc_title'),
    description: t('solutions.aidc_description'),
    image: adcImage,
    to: '/solutions/aidc'
  },
  {
    title: t('solutions.aiot_title'),
    description: t('solutions.aiot_description'),
    image: aIotImage,
    to: '/solutions/aiot'
  }
])
</script>
