/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        informing: {
          '0%': { transform: 'translateX(300px)' },
          '5%': { transform: 'translateX(0px)' },
          '95%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(300px)' },
        },
      },
      animation: {
        informing: 'informing 3s ease-in-out',
      },
      colors: {
        primary: colors.blue,
        secondary: colors.slate,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
