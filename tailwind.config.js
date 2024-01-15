/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        web: "url('/src/assets/image-web-design-large.jpg')",
        appDesign: "url('/src/assets/image-app-design.jpg')",
        graphic: "url('/src/assets/image-graphic-design.jpg')",
        circle: "url('/src/assets/bg-pattern-call-to-action.svg')",
      },
    },
  },
  plugins: [],
};
