// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-svgo",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon"
  ],
  googleFonts: {
    families: {
      Almarai: [300, 400, 700, 800],
      Archivo: '100..800'
    }
  },
  colorMode: {
    //preference: 'system', // default value of $colorMode.preference
    //fallback: 'light',
    classSuffix: ''
  }
})