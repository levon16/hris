/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#001F3F', 
        'primary-500': '#3A6D8C',
        'primary-400': '#6A9AB0',
        'secondary': '#EAD8B1'

      }
    },
  },
  plugins: [],
}

