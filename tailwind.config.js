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
        "primary-300": "#D73737",
        "secondary-100": "#F49F85",
        "secondary-200": "#E98888",
        "secondary-300": "#CFD7FF",
        "secondary-400": "#62BCFA",
        "secondary-500": "#8397F8",
        "neutral-100": "#FFFFFF",
        "neutral-200": "#F7F8FD",
        "neutral-300": "#F2F4FF",
        "neutral-400": "#647196",
        "neutral-500": "#3A4374",
        "neutral-600": "#373F68",
        "neutral-700": "#979797",
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
        xxs: [
          "0.8125rem",
          {
            lineHeight: "1.17rem",
            fontWeight: "500",
          },
        ],
        xs: "0.875rem",
        sm: [
          "0.9375rem",
          {
            lineHeight: "1.355rem",
            letterSpacing: "-0.02em",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.81rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      gap: {
        10.5: "2.375rem",
      },
      screens: {
        xs: "23.4375rem",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      width: {
        "3/4": "72%",
      },
      borderRadius: {
        "rounded-lg": "10px",
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
