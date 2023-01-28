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
        "secondary-600": "#C75AF6",
        "neutral-100": "#FFFFFF",
        "neutral-200": "#F7F8FD",
        "neutral-300": "#F2F4FF",
        "neutral-400": "#647196",
        "neutral-500": "#3A4374",
        "neutral-600": "#373F68",
        "neutral-700": "#979797",
        "neutral-800": "#373f6859",
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
      gridTemplateColumns: {
        "sidebar-lg": "13.75rem",
        "sidebar-xl": "15.9374rem",
      },
      gridTemplateRows: {
        "sidebar-lg": "8.5625rem 23rem",
        "sidebar-box-lg": "10.375rem 11.125rem",
      },
      maxWidth: {
        206: "51.5625rem",
      },
      screens: {
        xs: "23.4375rem",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        18: "4.5rem",
        19: "4.8125rem",
        26: "6.5206rem",
        45: "11.125rem",
        59: "15.9375rem",
        61: "15.3125rem",
        73: "18.9375rem",
        132: "33.0625rem",
        206: "51.5625rem",
        270: "67.5rem",
      },
      boxShadow: {
        "3xl": "0 10px 40px -7px rgba(55, 63, 104, 0.350492)",
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
