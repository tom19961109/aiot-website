// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/content'],
  css: ['~/assets/css/main.css'],

  i18n: {
    defaultLocale: 'zh-TW',
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json',
        name: '繁體中文'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'ja',
        file: 'ja.json',
        name: '日本語'
      }
    ]
  }
})
