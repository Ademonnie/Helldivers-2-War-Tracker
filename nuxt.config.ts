// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'HD2 War Status'
    }
  },

  nitro: {
    experimental: {
      database: true,
      tasks: true
    },
    database:{
      db: {
        connector: 'sqlite',
        options: { name: 'dbfile' }
      }
    }
  },

  modules: ['@nuxt/image']
})