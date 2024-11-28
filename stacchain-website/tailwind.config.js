/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
      fontSize: {
        clamp: "clamp(4rem, 9vw, 10rem)", // Define your clamp sizes
      },
    },
  },
  plugins: [],
};
