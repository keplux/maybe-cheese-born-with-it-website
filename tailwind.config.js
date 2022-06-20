const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.pink,
      },
      fontFamily: {
        sans: ['Montserrat'],
        handwriting: ['"Nothing You Could Do"'],
        cursive: ['Sacramento'],
        display: ['"Train One"']
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
