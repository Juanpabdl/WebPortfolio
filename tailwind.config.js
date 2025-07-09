/** @type {import('tailwindcss').Config} */
const {color: defaultColors} = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      ...defaultColors,
      'custom-teal': '#1DCD9F',
      'custom-dk-teal': '#158063',
      'custom-yellow': '#F4BB41',
      'custom-dk-gray': '#222222'
      },
    },
  },
  plugins: [],
}

