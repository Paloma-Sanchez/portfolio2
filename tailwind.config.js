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
      screens:{
        'desktop': '1350px'
      },
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
        rotate65Up0: {
          '0%': { transform: 'rotate(-65deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        rotate65Up5: {
          '0%': { transform: 'rotate(-65deg)' },
          '100%': { transform: 'rotate(5deg)' },
        },
        rotate65Up15: {
          '0%': { transform: 'rotate(-65deg)' },
          '100%': { transform: 'rotate(15deg)' },
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
        rotatingDotIntro: {
          '0%': {
            transform: 'translate3d(-10px, -50px, 10px)',
            opacity: 0
          },

          '75%': {
            transform: 'translate3d(0px, 5px, 10px)',
            opacity: 0.75
          },

          '100%': {
            transform: 'translate3d(0,0,0)',
            opacity: 1
          }
        },
        appear: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
        
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideUp: 'slideUp 400ms  ease-in-out 600ms forwards',
        slidePictureUp: 'slideUp 400ms ease-in-out',
        slideMailUp: 'slideUp 400ms  ease-in-out 800ms forwards',
        slideContactUp: 'slideUp 400ms  ease-in-out 900ms forwards',
        rotate65Up0: 'rotate65Up0 300ms linear 1100ms forwards',
        rotate65Up5: 'rotate65Up5 300ms linear 1100ms forwards',
        rotate65Up15: 'rotate65Up15 300ms linear 1100ms forwards',
        firstDot:'rotatingDotIntro 300ms linear 500ms forwards',
        secondDot:'rotatingDotIntro 300ms linear 650ms forwards',
        thirdDot:'rotatingDotIntro 300ms linear 800ms forwards',
        appear:'appear 700ms linear forwards'

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

