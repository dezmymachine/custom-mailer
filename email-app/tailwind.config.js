/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0466C8",
      },
    },
    fontFamily: {
      stix: ["Poppins", "serif"],
    },
  },
  plugins: [],
};
