// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    "@bg-dev/nuxt-naiveui"
  ],
  css: ['@/styles/global.css']
})