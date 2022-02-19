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
      "7xl": "5rem", // H2
      "8xl": "6.25rem", // H1(mobile)
      "12xl": "9.375rem", // H1
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
      backgroundImage: {
        "crew-lg": "url('/image/crew/background-crew-desktop.jpg')",
        "crew-md": "url('/image/crew/background-crew-tablet.jpg')",
        "crew-sm": "url('/image/crew/background-crew-mobile.jpg')",

        "home-lg": "url('/image/home/background-home-desktop.jpg')",
        "home-md": "url('/image/home/background-home-tablet.jpg')",
        "home-sm": "url('/image/home/background-home-mobile.jpg')",
      },
      ringWidth: {
        20: "88px",
        15: "48px",
      },
    },
  },
  plugins: [],
}
