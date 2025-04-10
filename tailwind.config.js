/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#33FF57",
        accent: "#3357FF",
        "custom-blue": "#1E40AF", // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
