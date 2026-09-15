// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxt/content', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://www.aie-tec.com.tw',
    name: '安智聯科技'
  },

  i18n: {
    baseUrl: 'https://www.aie-tec.com.tw',
    defaultLocale: 'zh-TW',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json',
        name: '繁體中文',
        language: 'zh-TW'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
        language: 'en'
      },
      {
        code: 'ja',
        file: 'ja.json',
        name: '日本語',
        language: 'ja'
      }
    ]
  },

  sitemap: {
    autoLastmod: true
  }
})
