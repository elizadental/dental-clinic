// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/icon','@nuxt/fonts'],
   fonts: {
  families: [
    {
      name: 'Manrope',
      provider: 'google'
    }
  ]
},
   css: ['~/assets/css/main.css'],
   icon: {
    serverBundle: {
     collections: [
   'lucide', 'logos', 'flagpack', 'mdi'
     ]
    }
  },
   i18n: {
    langDir: './locales/',
   
    defaultLocale: 'tr',
     vueI18n: './i18n.config.ts', // 👈 THIS IS REQUIRED
    strategy: 'prefix_except_default',
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  }
})