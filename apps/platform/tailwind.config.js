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
        "lg-m": "0.625rem",
      },
      width: {
        "33-1/2": "8.125rem",
        35: "8.75rem",
        37: "9.25rem",
        "37-1/2": "9.375rem",
        39: "9.75rem",
        50: "12.5rem",
        75: "18.75rem",
        "80-1-4": "20.25rem",
        // 86: "20rem",
        96: "36rem",
        128: "42rem",
        "inherit": "inherit"
      },
      height: {
        "14-1/2": "3.625rem",
        50: "12.5rem",
        86: "28rem",
        96: "36rem",
        128: "42rem",
      },
      lineHeight: {
        15: "5rem",
      },
      maxHeight: {
        86: "30rem",
        96: "36rem",
        128: "42rem",
      },
      maxWidth: {
        96: "36rem",
        "229px": "229px",
        "screen-3xl": "1754px",
      },
      minHeight: {
        72: "20rem",
        86: "28rem",
        96: "32rem",
      },
      spacing: {
        full: "100%",
      },
      screens: {
        xl: "1093px",
        xs: "465px",
        xxs: "352px"
      },
      borderRadius: {
        "lg-m": "0.625rem",
        "2xl-1": "1.25rem"
      },
      zIndex: {
        full: "9999",
        100: "100"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
