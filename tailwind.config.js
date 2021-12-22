const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./elements/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    fontFamily: {
      cartridge: ["cartridge", "ui-sans-serif", "system-ui"],
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
