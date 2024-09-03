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
    theme: {
      screens: {
        'sm': '540px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
  },
  darkMode: 'class', // Add this line to enable dark mode using a class
  plugins: [],
}

