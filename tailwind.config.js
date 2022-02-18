const { fontSize, fontWeight } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      "sans-condensed": ["Barlow Condensed", "sans-serif"],
      serif: ["Bellefair", "serif"],
    },
    fontSize: {
      ...fontSize,
      "3xl": "1.75rem", // H5
      "4xl": "2rem", // H4
      "5xl": "3.5rem", // H3
      "6xl": "6.25rem", // H2
      "7xl": "9.375rem", // H1
    },
    fontWeight: {
      ...fontWeight,
    },
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "620px",
      // => @media (min-width: 768px) { ... }

      xm: "890px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        cinder: "#0B0D17",
        fog: "#D0D6F9",
      },
    },
  },
  plugins: [],
}
