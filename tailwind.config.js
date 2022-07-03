/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      h1: ["32px"],
      h2: ["24px"],
      h3: ["20px"],
      h4: ["18px"],
      h5: ["16px"],
      h6: ["14px"],
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      md: ".9375rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {},
  },
  plugins: [],
};
