const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
      fontFamily: {
        monir: ["Sigmar One", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
