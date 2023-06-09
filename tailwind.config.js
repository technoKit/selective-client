/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: "#72A3F1",
          DEFAULT: "#162F57",
          dark: "#081529",
        },
        secondary: {
          light: "#FFE8BE",
          DEFAULT: "#F1BB55",
          dark: "#BE7D04",
        },
      },
      boxShadow: {
        "3xl": "0 3px 20px -5px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
