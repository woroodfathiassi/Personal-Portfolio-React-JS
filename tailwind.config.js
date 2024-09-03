/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff395e",
      },
      fontFamily: {
        time: ['Kanit', 'thin', 'italic'],
        
      },
    },
    theme: {}
  },
  darkMode: 'class', // Add this line to enable dark mode using a class
  plugins: [],
}

