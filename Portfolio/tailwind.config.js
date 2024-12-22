/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation:{
      //   intoduction:"intoduction 1s ease-in-out 1"
      // },
      // keyframes:{
      //  intoduction :
      //   {
      //     '0% 100%':
      //       {
      //         transform:'rotate(-3deg)',
      //       },
      //     '50%':
      //       {
      //         transform:'rotate(3deg)'
      //       },
      //   },
      // }
    },
  },
  plugins: [],
}

