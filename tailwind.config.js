/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      scale: {
        200: '2',
        250: '2.5',
        300: '3',
        350: '3.5',
        400: '4',
        450: '4.5',
        500: '5',
        600: '6',
        700: '7',
        800: '8',
      },
    },
  },
  plugins: [],
}

