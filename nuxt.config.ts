// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { 
    enabled: false,
  },
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
    restructureDir:'./',
    langDir: "./locales",
    defaultLocale:"pt_br",
    strategy:"prefix_except_default",
    locales:[
      {code: 'pt_br', language: "pt-BR", name: 'Portugês(BR)', file: 'pt_BR.json'},
      {code: 'en', language: "en-US", name: 'English(US)', file: 'en_US.json'},
    ],
    detectBrowserLanguage:{
      fallbackLocale: "pt_br",
      useCookie:false
    }
  },
})