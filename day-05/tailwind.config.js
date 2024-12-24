/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.navbar-item': {
          '@apply hover:text-blue-300 cursor-pointer transition duration-200 ease-in-out hover:scale-110': {},
        },
      })
    },
  ],
}