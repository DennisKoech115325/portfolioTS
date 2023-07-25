/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      l: '720px',
      bri:'1000px',
      xl: '1280px',
      xxl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}

