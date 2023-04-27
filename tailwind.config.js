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
        "secondary-700": " #7C91F9",
        "neutral-100": "#FFFFFF",
        "neutral-200": "#F7F8FD",
        "neutral-300": "#F2F4FF",
        "neutral-400": "#647196",
        "neutral-500": "#3A4374",
        "neutral-600": "#373F68",
        "neutral-700": "#979797",
        "neutral-800": "#373f6859",
        "neutral-900": "#656EA3",
        "neutral-1000": "#8C92B3",
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
          "0.8125rem", //13px
          {
            lineHeight: "1.17rem",
          },
        ],

        xs: "0.875rem", //14px

        sm: [
          "0.9375rem", //15px
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

        lg: ["1.125rem", { lineHeight: "1.75rem" }], //18px

        xl: [
          "1.25rem", //20px
          {
            lineHeight: "1.81rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },

      gridTemplateColumns: {
        "sidebar-lg": "13.75rem",
        "sidebar-xl": "15.875rem",
        "feedback-article-sm": "2.5rem 1fr 2.75rem",
        "comment-article-sm": "2.5rem 1fr",
      },

      gridTemplateRows: {
        "sidebar-lg": "8.625rem 23rem",
        "sidebar-box-lg": "10.375rem 11.125rem",
        "feedback-article": "1fr 2rem",
      },

      minHeight: {
        7.5: "1.875rem", //30px
        14: "3.5rem", //56px
      },

      maxWidth: {
        "1/2": "50%",
        xl: "33.75rem",
        "3xl": "51.625rem",
        "4xl": "55rem",
      },

      minWidth: {
        "3/4": "70%",
      },

      screens: {
        xs: "375px",
        "2xl": "1440px",
      },

      spacing: {
        //follows tailwind spacing system organisation - 1 = approx 4px //
        3.5: "0.875rem", //14px
        7.5: "1.875rem",
        10.5: "2.625rem", //42px
        17: "4.375rem", //70px
        18: "4.5rem",
        19: "4.8125rem",
        23: "5.75rem", //92px
        26: "6.5rem",
        29: "7.25rem",
        30: "7.5rem", //120px
        45: "11.125rem",
        59: "15.9375rem",
        61: "15.3125rem",
        73: "18.9375rem",
        76: "19rem",
        132: "33.125rem", //530px
        134: "33.75rem", //540px
      },

      boxShadow: {
        "3xl": "0 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },

      width: {
        "3/4": "72%",
      },

      borderRadius: {
        "rounded-lg": "0.625rem", //10x
      },
    },

    plugins: [require("@tailwindcss/forms")],
  },
};
