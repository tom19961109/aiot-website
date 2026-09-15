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
    }
  ]
})
</script>
