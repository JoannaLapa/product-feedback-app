/*global module, require */
/*eslint no-undef: "error"*/

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-100": "#4661E6",
        "primary-200": "#AD1FEA",
        "secondary-100": "#F49F85",
        "secondary-200": "#F49F85",
        "neutral-100": "#FFFFFF",
        "neutral-200": "#F7F8FD",
        "neutral-300": "#F2F4FF",
        "neutral-400": "#647196",
        "neutral-500": "#3A4374",
        "neutral-600": "373F68",
      },
      backgroundImage: {
        "background-header-sm":
          "url('/src/assets/suggestions/background-header-mobile.jpg')",
        "background-header-md":
          "url('/src/assets/suggestions/background-header-tablet.jpg')",
        "background-header-xl":
          "url('/src/assets/suggestions/background-header-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
