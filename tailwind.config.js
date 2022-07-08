const colors = require("tailwindcss/colors");

const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      neutral: colors.neutral,
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },
  },
  plugins: [],
};

module.exports = config;
