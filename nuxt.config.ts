// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
      '@nuxt/ui'
  ],

  tailwindcss:{
      exposeConfig:{
          level:2, 
          write:true
      },
      viewer: true,
      cssPath: ['./assets/css/tailwind.css', {injectPosition: 'first'}],
      configPath: 'tailwind.config',
      config:{

      },
  },

  compatibilityDate: '2024-08-06'
})