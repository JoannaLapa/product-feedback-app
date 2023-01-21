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
        "header-sm":
          "url('/src/assets/suggestions/background-header-mobile.jpg')",
        "header-md":
          "url('/src/assets/suggestions/background-header-tablet.jpg')",
        "header-xl":
          "url('/src/assets/suggestions/background-header-desktop.jpg')",
      },
      fontSize: {
        xs: [
          "0.8125rem",
          {
            lineHeight: "1.17rem",
            fontWeight: "500",
          },
        ],
        sm: [
          "0.9375rem",
          {
            lineHeight: "1.355rem",
            letterSpacing: "-0.02em",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.81rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      maxWidth: {
        "3/4": "72%",
      },
    },
    plugins: [],
  },
};
