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
