module.exports = {
  extends: "../../packages/ui/tailwind.config.js",
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
    },
  },
  plugins: [require("daisyui")],
};
