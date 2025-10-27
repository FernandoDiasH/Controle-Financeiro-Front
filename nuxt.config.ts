// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n:{
    defaultLocale:'br',
    locales:[
      {code: 'br', name: 'Portugês', file: 'br.json'},
      {code: 'en', name: 'English', file: 'en.json'},
    ]
  }
})