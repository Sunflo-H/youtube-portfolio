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
        youtube: "#ff0000",
        dark: {
          fg: {
            10: "hsl(0,0%,30%)",
            20: "hsl(0,0%,40%)",
            30: "hsl(0,0%,50%)",
            40: "hsl(0,0%,60%)",
            50: "hsl(0,0%,70%)",
            60: "hsl(0,0%,80%)",
            70: "hsl(0,0%,85%)",
            80: "hsl(0,0%,90%)",
            90: "hsl(0,0%,95%)",
            100: "hsl(0,0%,100%)",
          },
          bg: {
            10: "hsl(0,0%,80%)",
            20: "hsl(0,0%,70%)",
            30: "hsl(0,0%,60%)",
            40: "hsl(0,0%,50%)",
            50: "hsl(0,0%,40%)",
            60: "hsl(0,0%,30%)",
            70: "hsl(0,0%,20%)",
            80: "hsl(0,0%,15%)",
            90: "hsl(0,0%,10%)",
            100: "hsl(0,0%,5%)",
          },
        },
        light: {
          fg: {
            10: "hsl(0,0%,80%)",
            20: "hsl(0,0%,70%)",
            30: "hsl(0,0%,60%)",
            40: "hsl(0,0%,50%)",
            50: "hsl(0,0%,40%)",
            60: "hsl(0,0%,30%)",
            70: "hsl(0,0%,20%)",
            80: "hsl(0,0%,15%)",
            90: "hsl(0,0%,10%)",
            100: "hsl(0,0%,5%)",
          },
          bg: {
            10: "hsl(0,0%,30%)",
            20: "hsl(0,0%,40%)",
            30: "hsl(0,0%,50%)",
            40: "hsl(0,0%,60%)",
            50: "hsl(0,0%,70%)",
            60: "hsl(0,0%,80%)",
            70: "hsl(0,0%,85%)",
            80: "hsl(0,0%,90%)",
            90: "hsl(0,0%,95%)",
            100: "hsl(0,0%,100%)",
          },
        },
      },
    },
  },
  plugins: [],
};

// paragraph : 문단
// callout : 설명선
