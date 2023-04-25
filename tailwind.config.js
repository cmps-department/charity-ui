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
        "primary-400": "#ffffff",
        "accent-100": "#C0C0C0",
        "accent-200": "#626262",
        "bg-100": "#F7F7F7",
        "bg-200": "#ededed",
        "bg-300": "#c4c4c4",
        "or-300": "#fef3b5",
        "gr-300": "#b5ffb4",
        "or-00": "#fefae4",
        "gr-00": "#d0ffcf",
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

