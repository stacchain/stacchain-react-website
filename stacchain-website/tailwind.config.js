/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
      fontSize: {
        clamp: "clamp(3rem, 8vw, 9rem)", // Define your clamp sizes
      },
    },
  },
  plugins: [],
};
