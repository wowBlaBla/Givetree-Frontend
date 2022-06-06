module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#111111",
        "brand-green-active": "#38d05b",
        "brand-orange": "#f95C32",
        "brand-orange-active": "#d4674c",
        "brand-orange-hover": "#c2410c",
        "brand-orange-light": "#fec066",
        "brand-orange-secondary": "#fe8646",
        "gradient-orange-from": "#f95c32",
        "gradient-orange-to": "#fcAc4e",
      },
      fontSize: {
        none: "0",
      },
      height: {
        96: "36rem",
        128: "42rem",
      },
      lineHeight: {
        15: "5rem",
      },
      maxHeight: {
        96: "36rem",
        128: "42rem",
      },
      maxWidth: {
        "screen-3xl": "1754px",
      },
      minHeight: {
        72: "20rem",
        96: "32rem",
      },
      spacing: {
        full: "100%",
      },
    },
  },
  plugins: [require("daisyui")],
};
