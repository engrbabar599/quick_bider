/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "inter": ["Inter"],
        "open-sans": ["Open Sans"]
      },
      colors: {
        "custom-blue": "#6F9CFF",
        "custom-green": "#3EB14A",
        "custom-gray": "#F5F5F5",
        gray: {
          "1": "#333333",
          "2": "#4F4F4F",
          "4": "#828282",
          "5": "#E0E0E0"
        }
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  
  plugins: [],
}

