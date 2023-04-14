/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "text-100": "#333333",
        "text-200": "#5c5c5c"
      },
      colors: {
        "primary-100": "#FFD700",
        "primary-200": "#ddb900",
        "primary-300": "#917800",
        "accent-100": "#C0C0C0",
        "accent-200": "#626262",
        "bg-100": "#F7F7F7",
        "bg-200": "#ededed",
        "bg-300": "#c4c4c4"
      },
      container: {
        center: true,
        maxWidth: '1280px'
      },
      maxWidth: {
        "300": "300px"
      }
    },
  },
  plugins: [],
}

