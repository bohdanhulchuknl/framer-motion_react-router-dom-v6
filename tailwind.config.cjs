/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas", "monospace"],
        poppins: ["Poppins", "monospace"],
        
      },
      borderColor: {
        bgSecondary: "rgb(var(--bg-secondary))",
      }
    },
    colors: {
      // Using modern `rgb`
      primary: "rgb(var(--text-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      bgSecondary: "rgb(var(--bg-secondary))",
    },
    fontSize: {
      mainText: "var(--main-text-size)",
    },
    backgroundColor: {
      primary: "rgb(var(--bg-primary))",
      secondary: "rgb(var(--bg-secondary))",
    },
    transitionDuration: {
      defaultSpeed: "var(--transition-speed)",
    },
    transitionProperty: {
      width: "width",
    },
  },
  plugins: [],
};
