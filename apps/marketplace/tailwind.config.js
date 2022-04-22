// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#111111",
        "brand-orange": "#fa5021",
        "brand-orange-hover": "#c2410c",
        "brand-orange-active": "#341a14",
      },
      fontFamily: {
        "open-sans-medium": ["OpenSans-Medium", ...defaultTheme.fontFamily.sans],
        "open-sans-bold": ["OpenSans-Bold", ...defaultTheme.fontFamily.sans],
        "open-sans-extrabold": ["OpenSans-ExtraBold", ...defaultTheme.fontFamily.sans],
        "open-sans-semibold": ["OpenSans-SemiBold", ...defaultTheme.fontFamily.sans],
        sans: ["OpenSans-Regular", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "screen-3xl": "1754px",
      },
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
