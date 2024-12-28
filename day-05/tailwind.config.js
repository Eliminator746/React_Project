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
        '.checkout-box' : {
          '@apply p-6 mt-6 max-w-md mx-auto bg-white shadow-lg rounded-lg' : {},
        },
        '.price-summary' : {
          '@apply flex justify-between text-gray-700' :{},
        },
        
      })
    },
  ],
}