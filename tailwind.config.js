/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        customYellow: '#ffca08',
        customP: '#aaaaaa',
        customAccordionColor: '#5b5748',
        customGray: '#1e1e1e',
        lightGray: '#E4E0E1',
        formBg: '#1C1601',
        formLabel: '#858480'
      },

      screens: {
        '500px': {'max': '500px'},
      }

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