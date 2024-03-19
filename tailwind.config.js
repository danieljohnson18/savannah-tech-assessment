/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "smooth-gradient":
          "linear-gradient(to right, #E84D70, #A337F6, #28A7ED)"
      }
    }
  },
  plugins: []
};
