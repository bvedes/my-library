module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoColumns: {
        "4fr": "minmax(0, 4fr)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {},
};
