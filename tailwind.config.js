/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./services/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E0C56E',
          500: '#D4AF37',
          600: '#C09A2E',
        },
        'muted-blue': '#8A9AAF',
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        lora: ['"Lora"', 'serif'],
      },
    },
  },
  plugins: [],
};
