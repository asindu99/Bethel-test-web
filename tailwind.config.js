/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors : {
        'primary' : '#293793',
        'bethelOrange' : '#E9983C',
        'liniear' : 'bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]'
      }
    },
  },
  plugins: [],
}

