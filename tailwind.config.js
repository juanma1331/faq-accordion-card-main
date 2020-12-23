const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        500: "500px",
      },
      fontFamily: {
        serif: ["Kumbh Sans"],
      },
      colors: {
        "dark-blue": "#1d1e35",
        "soft-blue": "#6565e7",
        "soft-violet": "#af67e9",
        "calmed-blue": "#6565e7",
        "grayish-blue": "#4a4b5e",
        "dark-grayish-blue": "#787887",
        "light-grayish-blue": "#e7e7e9",
        yellow: colors.amber,
      },
    },
  },
  variants: {
    extend: {
      outline: ["active"],
    },
  },
  plugins: [],
};
