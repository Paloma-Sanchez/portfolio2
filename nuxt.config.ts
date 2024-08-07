// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: false },
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
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-aos"
  ],
  googleFonts: {
    families: {
      Almarai: [300, 400, 700, 800],
      Archivo: '100..800'
    }
  },
  colorMode: {
    preference: 'system', 
    fallback: 'dark',
    classSuffix: ''
  },

})
