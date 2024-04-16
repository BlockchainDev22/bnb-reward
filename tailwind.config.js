/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/preline/preline.js",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#0c1330",
        second: "#16193b"
      },
      borderColor: {
        main: "#00b9ff40"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}