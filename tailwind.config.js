/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kannadaFake': ['KannadaFake'],
        'Almarai':['Almarai'],
        'Archivo': ['Archivo']
      },
    },
  },
  keyframes: {
    wiggle: {
      '0%, 100%': { transform: 'rotate(-3deg)' },
      '50%': { transform: 'rotate(3deg)' },
    },
  },
  animation: {
    wiggle: 'wiggle 1s ease-in-out infinite',
  },
  plugins: [],
  safelist: [
    {
      pattern: /row-end-(1|2|3|4|5)/,
    },
  ]
}

