/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rz-lategray": "#1B3228",
        "rz-darkgreen": "rgba(2, 67, 0, 0.53)",
        "rz-royalblue": "#007aff",
      },
    },
  },
  plugins: [],
};
