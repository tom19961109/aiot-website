<template>
  <div>
    <UApp>
      <AppHeader />

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <AppFooter />
    </UApp>
  </div>
</template>

<script setup lang="ts">
const i18nHead = useLocaleHead({
  seo: true
})

useHead({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,

  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-4WLK91PLGM'
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4WLK91PLGM');
      `
    },

    // Schema.org
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',

        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://www.aie-tec.com.tw/#organization',

            name: '安智聯科技',
            alternateName: 'AIoT Co., Ltd.',

            url: 'https://www.aie-tec.com.tw/',

            logo: {
              '@type': 'ImageObject',
              url: 'https://www.aie-tec.com.tw/images/logo.png'
            }
          },

          {
            '@type': 'WebSite',
            '@id': 'https://www.aie-tec.com.tw/#website',

            url: 'https://www.aie-tec.com.tw/',
            name: '安智聯科技',

            publisher: {
              '@id': 'https://www.aie-tec.com.tw/#organization'
            },

            inLanguage: ['zh-TW', 'en', 'ja']
          }
        ]
      })
    }
  ]
})
</script>
