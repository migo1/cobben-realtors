/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cool-gray": "#F6F4F2",
        "cool-blue": "#0B2C3D",
        "cool-brown": "#4a2c40",
        "cool-green": "#3FD2C7",
        "light-cool-blue": "#99DDFF",
        "dark-cool-blue": "#373833",
        "cool-orange": "#FF5A3C",
      },
    },
  },
  plugins: [],
};

