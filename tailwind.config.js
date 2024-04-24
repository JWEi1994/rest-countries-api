/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      minHeight: {
        '30': '360px',
      },
      colors: {
        darkModeElements: "hsl(209, 23%, 22%)",
        darkModeBackground: "hsl(207, 26%, 17%)",
        lightModeText: "hsl(200, 15%, 8%)",
        lightModeInput: "hsl(0, 0%, 52%)",
        lightModeBackground: "hsl(0, 0%, 98%)",

      },
      maxWidth: {
        560: "560px",
      },
      maxHeight: {
        400: "400px",
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  plugins: [],
}

