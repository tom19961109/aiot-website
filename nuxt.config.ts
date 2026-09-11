export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: {
    enabled: false
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/zh/', '/en/', '/ja/']
    }
  }
})
