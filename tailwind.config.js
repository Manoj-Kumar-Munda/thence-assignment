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
        'default-primary-cta': '#1C1C1C',
        'hover-primary-cta': '#4E4E4E',
        'default-secondary-cta': '#fff',
        'default-secondary-cta-border': '#EAEAEA',
        'hover-secondary-cta': '#F1F1F1',
    
          
      }
    },
  },
  plugins: [],
}

