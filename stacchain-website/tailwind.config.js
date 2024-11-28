/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
      fontSize: {
        clamp: "clamp(4rem, 10vw, 11rem)", // Define your clamp sizes
        clampIcon: "clamp(1rem, 2vw, 2rem)",
      },
    },
  },
  plugins: [],
};
