/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
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
        black: '#000', // Corrected hex code format
        'custom-green': '#00ffd5',
        'dark-mode-light': '#cccccc', // Adjust light border color for light mode
        'dark-mode-accent': '#00ffd5', // Keep the accent color the same
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
