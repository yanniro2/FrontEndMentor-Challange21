/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      Mobile: { "min": "375px", "max": "600px" },
      Tab: { "min": "600px", "max": "900px" },
      Desktop: "1440px",
    },
    colors: {
      "Almost-White": "hsl(0, 0%, 98%)",
      "Medium-Gray": "hsl(0, 0%, 41%)",
      "Almost-Black": "hsl(0, 0%, 8%)",
    },
    fontSize: {
      "ms": "18px",
    },
    fontWeight: {
      "ms": 500,
      "lg": 700,
    },
    fontFamily: {
      "Epilogue": ["Epilogue", "sans-serif"],
    },
  },
  extend: {},
  plugins: [],
}
