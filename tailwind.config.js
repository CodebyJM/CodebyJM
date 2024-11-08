/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        BASE_BLACK: '#242424',
        black: '000',
        'custom-green': '#00ffd5',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  require('tailwind-scrollbar'),
],
  
}
