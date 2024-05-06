/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Covered By Your Grace", "cursive"]
      },
      colors: {
        'btn-black' : '#1C1C1C'
      }
    },
  },
  plugins: [],
}

