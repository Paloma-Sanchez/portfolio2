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
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        rotateDown: {
          '0%': { transform: 'rotate(-45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(40px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideUp: 'slideUp 400ms  ease-in-out 600ms forwards',
        slidePictureUp: 'slideUp 400ms ease-in-out',
        slideMailUp: 'slideUp 400ms  ease-in-out 800ms forwards',
        rotateDown: 'rotateDown 300ms linear 1100ms forwards'

      },
    },
  },
  
  plugins: [],
  safelist: [
    {
      pattern: /row-end-(1|2|3|4|5)/,
    },
  ]
}

