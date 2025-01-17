/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins"],
        "inter": ["Inter"],
        "open-sans": ["Open Sans"],
        "lato": ["Lato"],
        "dm-sans": ["DM Sans"],
        "Work-sans": ["Work Sans"],
        "hk-grotesk": ["Hanken Grotesk"],
        "roboto": ["Roboto"]
      },
      colors: {
        "custom-red": "#F43A3A",
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

