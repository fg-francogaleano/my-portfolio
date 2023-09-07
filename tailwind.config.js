/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'profile': "url('https://res.cloudinary.com/dfmkjxjsf/image/upload/v1692823992/varietales/b7c5ca3b-46b6-44e0-8f42-76573ecccb00_j5putc.png')",
      }
    },
    fontFamily : {
      robotoMono : ['Roboto Mono', 'monospace'],
      condensed : ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [],
}

