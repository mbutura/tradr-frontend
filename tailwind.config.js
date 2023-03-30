/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-color-ecf2ff': '#ECF2FF',
        'theme-color-3e54ac': '#3E54AC',
        'theme-color-655dbb': '#655DBB',
        'theme-color-bface2': '#BFACE2',
      },
      fontFamily: {
        'theme-font-lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

