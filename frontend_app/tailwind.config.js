/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '680px',

        md: '900px',

        lg: '1024px',  

        xl: '1280px',

        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};