/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0466C8",
        dark: "#001233",
        secondary: "#33415C",
        neutral: "#979DAC",
        tertiary: "#023E7D",
      },
    },
    fontFamily: {
      stix: ["Jost", "serif"],
    },
  },
  plugins: [],
};
