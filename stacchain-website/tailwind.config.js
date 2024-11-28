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
        clampIcon: "clamp(0.5rem, 2vw, 2rem)",
        clampLogo: "clamp(2rem, 3vw, 12rem)",
      },
    },
  },
  plugins: [],
};
