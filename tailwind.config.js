/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(185, 75%, 39%)",
        darkBlue: "hsl(229, 23%, 23%)",
        darkGray: "hsl(227, 10%, 46%)",
      },
      fontFamily: {
        body: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {
        heading: "18px",
        regular: "14px",
        small: "10px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
