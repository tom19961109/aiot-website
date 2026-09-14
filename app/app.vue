<template>
  <div>
    <UApp>
      <AppHeader />

      <!-- <UHeader /> -->

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>

      <AppFooter />
    </UApp>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-4WLK91PLGM',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4WLK91PLGM');
      `,
    },
  ],
});
</script>
