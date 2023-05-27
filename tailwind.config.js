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
        "header": "rgba(232, 232, 232, 0.85)",
        "footer": "#917800",
        "bg-100": "#F7F7F7",
        "bg-200": "#ededed",
        "bg-300": "#c4c4c4",
        "bg-400": "#f3f3f3",
        "or-300": "rgba(255, 251, 228, 0.85)",
        "or-500": "rgba(255, 241, 167, 0.85)",
        "gr-300": "#D8FFD8",
        "gr-500": "#B4FFB3",
        "input": "#333333",
        "blur": "rgba(247, 247, 247, 0.8)",
        "succesful": "#41A910",
        "error": "#EB3223"
      },
      container: {
        center: true
      },
      maxWidth: {
        "300": "300px",
        "xl": "1280px"
      },
      margin: {
        "15": "60px",
      },
      padding: {
        "5.5": "22px"
      },
      borderWidth: {
        "3": "3px"
      },
      outlineWidth: {
        "3": "3px"
      },
      width: {
        "right-section": "calc(58.333333% - 48px)"
      }
    },
  },
  plugins: [],
}

