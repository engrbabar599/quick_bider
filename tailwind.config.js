/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"]
      },
      colors: {
        "blue": "#6F9CFF",
        gray: {
          "1": "#333333",
          "4": "#828282",
          "5": "#E0E0E0"
        }

      }
    },
  },
  plugins: [],
}

