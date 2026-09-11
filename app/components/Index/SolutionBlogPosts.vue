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
        >
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

const props = defineProps<{
  solutions: {
    eap_title: string
    eap_description: string
    rcm_title: string
    rcm_description: string
    rpa_title: string
    rpa_description: string
    spc_title: string
    spc_description: string
    aidc_title: string
    aidc_description: string
    aiot_title: string
    aiot_description: string
  }
}>()
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

const posts = computed<BlogPostProps[]>(() => [
  {
    title: t(props.solutions.eap_title),
    description: t(props.solutions.eap_description),
    image: eapImage,
    to: '/solutions/eap'
  },
  {
    title: t(props.solutions.rcm_title),
    description: t(props.solutions.rcm_description),
    image: rcmImage,
    to: '/solutions/rcm'
  },
  {
    title: t(props.solutions.rpa_title),
    description: t(props.solutions.rpa_description),
    image: rpaImage,
    to: '/solutions/rpa'
  },
  {
    title: t(props.solutions.spc_title),
    description: t(props.solutions.spc_description),
    image: spcImage,
    to: '/solutions/spc'
  },
  {
    title: t(props.solutions.aidc_title),
    description: t(props.solutions.aidc_description),
    image: adcImage,
    to: '/solutions/aidc'
  },
  {
    title: t(props.solutions.aiot_title),
    description: t(props.solutions.aiot_description),
    image: aIotImage,
    to: '/solutions/aiot'
  }
])
</script>
