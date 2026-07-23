/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          primary: '#0ea5e9',
          secondary: '#38bdf8',
          accent: '#818cf8',
        }
      }
    },
  },
  plugins: [],
}

