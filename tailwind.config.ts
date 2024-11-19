/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#173f74',
        'gray-light': '#f5f5f5',
        'gray-medium': '#707070',
        'gray-dark': '#303030',
      },
    },
  },
  plugins: [],
} 