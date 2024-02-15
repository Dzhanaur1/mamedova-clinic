/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        intro: "url('/intro.webp')",
        mb_intro: "url('/intro-mobile.webp')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1365px",
        xl: "1500px",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1365px",
        },
      },
      colors: {
        white: "#FCF8F3",
        biege: "#F9EFDD",
        black: "#2E2E2E",
        biege_500: "#EBD9B4",
        biege_600: "#D6B886",
      },
    },
  },
  plugins: [],
};
