/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors : {
        // main color themes
        'bethelOrange' : '#E9983C',
        'bethelBlue' : '#293793',
        'bethelLinear' : 'bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]',

        // sidebar color themes
        'sidebarBG' : '#0400ff',
        'sidebarText' : '#ffffffb5'
      }
    },
  },
  plugins: [],
}

