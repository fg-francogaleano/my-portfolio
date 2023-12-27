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
    transitionDuration: {
      '100': '100ms',
      '200': '100ms',
      '300': '100ms',
      '400': '100ms',
      '500': '100ms',
      '600': '100ms',
      '700': '100ms',
      '800': '100ms',
      '900': '100ms',
      '1000': '3000ms',
      '2000': '1000ms',
      '3000': '2000ms',
    },
    colors: {
      white:'white',
      black:'black',
      red:'red',
      green:'green',
      blue:'blue',
      transparent:'transparent',
      primary:'#083088',
      secondary:'#593088',
      tertiary:'#FB3088'
    }
  },
  plugins: [],
}

