/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  theme: {
    extend: {
      gridTemplateRows:{
        'layout':'auto 1fr auto'
      },
      color:{
        'logo-sun':'#F28C38',
      },
      fontFamily:{
        main:['Ubuntu']
      }
    },
  },
  plugins: [],
}