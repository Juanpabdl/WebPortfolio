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
      keyframes: {
        "fade-in":{
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
         "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadein: 'fade-in 0.5s ease-in 1',
        fadeindown: 'fade-in-down 1s ease-in forwards',
        fadeindowndelay1: 'fade-in-down 1.2s ease-in forwards',
        fadeindowndelay2: 'fade-in-down 1.4s ease-in forwards',
        fadeindowndelay3: 'fade-in-down 1.6s ease-in forwards',
      }
    },
  },
  plugins: [],
}

