const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
