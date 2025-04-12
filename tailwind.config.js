/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A8B5",
        secondary: "#33FF57",
        accent: "#3357FF",
        "custom-blue": "#1E40AF", // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
