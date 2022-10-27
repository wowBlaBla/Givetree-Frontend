module.exports = {
  darkMode: "class",
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
        "menu-orange": "#fb5022",
        "deep-dark": "#202225",
        "mid-dark": "#2F3136",
        "light-dark": "#37393E",
        "menu": "#75FCC1",
        "primary": "#3897F0",
        "light-gray": "#F1F4F7",
        "light-black": "#070707",
      },
      fontSize: {
        "none": "0",
        "lg-m": "0.625rem",
        "t1": "14px",
        "h": "1.5rem",
      },
      fontFamily: {
        "side-menu": `"Montserrat Bold","Arial Black",sans-serif`,
      },
      width: {
        "22.5": "5.625rem",
        "25": "6.25rem",
        "33.5": "8.125rem",
        "35": "8.75rem",
        "37": "9.25rem",
        "37.5": "9.375rem",
        "39": "9.75rem",
        "50": "12.5rem",
        "75": "18.75rem",
        "80-1-4": "20.25rem",
        // 86: "20rem",
        "100": "25rem",
        "128": "42rem",
        "inherit": "inherit"
      },
      height: {
        "18": "4.5rem",
        "14.5": "3.625rem",
        "25": "6.25rem",
        "37.5": "9.375rem",
        "50": "12.5rem",
        "100": "25rem",
        "128": "42rem",
      },
      lineHeight: {
        15: "5rem",
      },
      maxHeight: {
        "86": "30rem",
        "96": "36rem",
        "128": "42rem",
        "layout": "calc(100vh - 60px)"
      },
      maxWidth: {
        "96": "36rem",
        "229px": "229px",
        "layout-s": "576px",
        "layout-l": "976px",
        "layout-xl": "1100px",
        "screen-3xl": "1754px",
      },
      minHeight: {
        "72": "20rem",
        "86": "28rem",
        "96": "32rem",
      },
      spacing: {
        "12.5": "3.125rem",
        "15": "3.75rem",
        "full": "100%",
      },
      screens: {
        "xs": "465px",
        "xxs": "352px",
        "3xl": { "min" : "1920px", "max": "2560px" }
      },
      borderRadius: {
        "lg-m": "0.625rem",
        "2xl-1": "1.25rem"
      },
      boxShadow: {
        "fixed": "0 0 60px rgba(0,0,0,0.4)",
        "normal": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card-theme": "0px 0px 0px 1px",
      },
      zIndex: {
        "full": "9999",
        "100": "100"
      },
      gridTemplateColumns: {
        'card-layout': "repeat(auto-fill, minmax(200px, 1fr))"
      },
      flex: {
        "2": '2 2 0%',
        "3": '3 3 0%',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
