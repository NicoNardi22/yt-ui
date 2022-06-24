module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    {
      "postcss-import": {},
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
