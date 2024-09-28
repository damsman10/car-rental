/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    extend: {
      
    },

  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hidden': {
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        }
      })
    }
  ],
}