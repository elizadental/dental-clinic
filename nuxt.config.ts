// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  vite: {
    ssr: {
      noExternal: ['tslib']
    }
  },

  nitro: {
    externals: {
      inline: ['tslib']
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap'
  ],

  supabase: {
    redirect: false,
    types: false
  },

  runtimeConfig: {
    public: {
      adminEmail: ''
    }
  },
site: {
  url: 'https://www.elizadent.com',
  name: 'Eliza Dental Clinic'
},

sitemap: {
  urls: [
    '/',
    '/en',
    '/gallery',
    '/en/gallery',
    '/doctors',
    '/en/doctors',
    '/services/dental-implant',
    '/en/services/dental-implant',
    '/services/teeth-whitening',
    '/en/services/teeth-whitening',
    '/services/orthodontics',
    '/en/services/orthodontics',
    '/services/smile-design',
    '/en/services/smile-design',
    '/contact',
    '/en/contact'
  ]
},
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
        'lucide',
        'logos',
        'flagpack',
        'mdi'
      ]
    }
  },

  i18n: {
    baseUrl: 'https://www.elizadent.com',

    langDir: './locales/',

    defaultLocale: 'tr',

    vueI18n: './i18n.config.ts',

    strategy: 'prefix_except_default',

    locales: [
      {
        code: 'tr',
        name: 'Türkçe',
        file: 'tr.json',
        language: 'tr-TR'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        language: 'en-US'
      }
    ]
  }
})