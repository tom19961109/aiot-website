<script setup>
import { SITE_URL, languages, getAlternateLinks } from '~/utils/site-content'

useSeoMeta({
  title: '安智聯科技有限公司｜智慧製造與自動化整合',
  description: '安智聯、安智聯科技、安智聯科技有限公司提供智慧製造、AI 視覺檢測、EAP 設備自動化、SPC 統計製程控制、RCM 遠端機台控制與 RPA 自動化整合服務。',
  ogType: 'website',
  ogSiteName: '安智聯科技有限公司',
  ogTitle: '安智聯科技有限公司｜智慧製造與自動化整合',
  ogDescription: '智慧製造、AI 視覺檢測、EAP、SPC、RCM、RPA 與 AIoT 系統整合服務。',
  ogUrl: SITE_URL
})

useHead({
  link: [
    { rel: 'canonical', href: SITE_URL },
    ...getAlternateLinks()
  ],
  script: [
    {
      children: `(() => {
        const language = (navigator.language || navigator.userLanguage || '').toLowerCase()
        let target = '/zh/'

        if (language.startsWith('ja')) target = '/ja/'
        else if (language.startsWith('en')) target = '/en/'

        window.location.replace(target)
      })()`
    }
  ]
})
</script>

<template>
  <main class="language-entry">
    <section>
      <h1>安智聯科技有限公司</h1>
      <p>請選擇語言。Please select your language. 言語を選択してください。</p>
      <nav aria-label="Language selection">
        <NuxtLink
          v-for="language in languages"
          :key="language.code"
          :to="`/${language.code}/`"
          :hreflang="language.hreflang"
        >
          {{ language.label }}
        </NuxtLink>
      </nav>
    </section>
  </main>
</template>
