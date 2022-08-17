/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#5541D7",
        lightPurple: "#DBD7F4",
        darkGray: "#92929D",
        customGray: "#E2E2EA",
        lightGray: "#F7F7FC",
        customBlack: "#11142D",
        customGreen: "#42BDA1",
      },
    },
  },
  plugins: [],
};
