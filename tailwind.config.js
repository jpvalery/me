const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./elements/**/*.js",
    "./node_modules/@jpvalery/mistral/**/*.js",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      cartridge: ["cartridge", "ui-sans-serif", "system-ui"],
      mono:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
    },
    extend: {
      colors: {
        portfolio: "#A56D5E",
        archive: colors.purple,
        club: colors.sky,
        unsplash: colors.slate,
        about: colors.amber,
        now: colors.lime,
        stack: colors.violet,
        dashboard: colors.rose,
        cemetery: colors.red,
        growth: colors.emerald,
      },
    },
  },
};
