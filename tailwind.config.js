/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": {
            visibility: "hidden",
          },
          "100%": {
            visibility: "visible",
          },
        },
      },
      animation: {
        blink: "blink 1s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
