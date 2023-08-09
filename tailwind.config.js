/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily : {
      robotoMono : ['Roboto Mono', 'monospace'],
      condensed : ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [],
}

