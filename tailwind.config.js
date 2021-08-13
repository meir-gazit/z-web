const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/4': '75%',
     },
    extend: {
      colors: {
        "light-blue": "rgb(173, 216, 230)",
        cyan: "rgb(0,255,255)",
        myBlue: '#EFF6FF',
      },      
      width: {
        120: "120%",
      },
      height: {
        120: "120%",
      },
      inset: {
        "-10": "-10%",
      },
      borderRadius: {
        100: "100%",
      },
      animation: {
        glow1: "glow1 4s linear infinite",
        glow2: "glow2 4s linear infinite",
        glow3: "glow3 4s linear infinite",
        glow4: "glow4 4s linear infinite",
      },
      keyframes: {
        glow1: {
          "0%": { transform: "translate(10%, 10%) scale(1)" },
          "25%": { transform: "translate(-10%, 10%) scale(1)" },
          "50%": { transform: "translate(-10%, -10%) scale(1)" },
          "75%": { transform: "translate(10%, -10%) scale(1)" },
          "100%": { transform: "translate(10%, 10%) scale(1)" },
        },
        glow2: {
          "0%": { transform: "translate(-10%, -10%) scale(1)" },
          "25%": { transform: "translate(10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1)" },
          "75%": { transform: "translate(-10%, 10%) scale(1)" },
          "100%": { transform: "translate(-10%, -10%) scale(1)" },
        },
        glow3: {
          "0%": { transform: "translate(-10%, 10%) scale(1)" },
          "25%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, -10%) scale(1)" },
          "75%": { transform: "translate(10%, 10%) scale(1)" },
          "100%": { transform: "translate(-10%, 10%) scale(1)" },
        },
        glow4: {
          "0%": { transform: "translate(10%, -10%) scale(1)" },
          "25%": { transform: "translate(10%, 10%) scale(1)" },
          "50%": { transform: "translate(-10%, 10%) scale(1)" },
          "75%": { transform: "translate(-10%, -10%) scale(1)" },
          "100%": { transform: "translate(10%, -10%) scale(1)" },
        },
      },
      margin: {
        "-380": "-380px",
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        200: 200,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
        "1Thousand": 1000,
        "2Thousand": 2000,
        "3Thousand": 3000,
        "4Thousand": 4000,
        "5Thousand": 5000,
        "6Thousand": 6000,
        "7Thousand": 7000,
        "8Thousand": 8000,
        "9Thousand": 9000,
        "10Thousand": 10000,
        "11Thousand": 11000,
        max: 9999999,
        auto: "auto",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
