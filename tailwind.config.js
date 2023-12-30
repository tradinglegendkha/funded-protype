/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        textlight: "#dbdbdb",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "header-pattern": "url('/src/assets/background.jpg')",
        "new-header": "url('/src/assets/testheader.jpg')",
      },
    },
  },
  plugins: [],
};
