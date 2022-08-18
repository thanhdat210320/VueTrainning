/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      s: '300px', 
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {},
  },
  plugins: [],
}
