/** @type {import('tailwindcss').Config} */
const purgecss = require('@fullhuman/postcss-purgecss')
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        clamp: 'clamp(1.3rem, 5vw, 3rem)',
        clampXS: 'clamp(0.5rem, 2vw, 1rem)',
        clampS: 'clamp(1rem, 3vw, 1.5rem)',
        clampL: 'clamp(1.5rem, 8vw, 5rem)',
        clampXXL: 'clamp(1.5rem, 15vw, 7rem)',
        clamp3XL: 'clamp(1.5rem, 15vw, 8rem)',
      },

      boxShadow: {
        overlay: '100px 100px 100px 100rem rgba(0, 0, 0, 0.26) inset',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1', scale: '1' },
        },
      },

      animation: { fadeInNow: 'fadeIn 2s linear' },

      keyframes: {
        scrollLeft: {
          to: {
            left: '-200px',
          },
        },
      },
      animation: {
        scrollLeftAnimation: 'scrollLeft 20s linear infinite',
      },
    },
    plugins: [
      purgecss({
        content: ['./**/*.html'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    ],
  },
}
