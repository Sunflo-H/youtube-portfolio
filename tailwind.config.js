/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["roboto"],
    },
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        youtube: "#ff0000",
        dark: {
          bg: "hsl(0, 0%, 0%)",
          logo: "hsl(0, 0%, 90%)",
          text: "hsl(0, 0%, 80%)",
          subheader: "hsl(0, 0%, 60%)",
          paragraph: "hsl(0, 0%, 80%)",
          calloutbg: "hsl(0, 0%, 10%)",
        },
        light: {
          bg: "hsl(0, 0%, 100%)",
          logo: "hsl(0, 0%, 10%)",
          text: "hsl(0, 0%, 20%)",
          subheader: "hsl(0, 0%, 40%)",
          paragraph: "hsl(0, 0%, 20%)",
          calloutbg: "hsl(0, 0%, 90%)",
        },
      },
    },
  },
  plugins: [],
};

// paragraph : 문단
// callout : 설명선
