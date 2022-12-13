/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    // etc.
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "#F7F1FA",
        purple: "#39064D",
        green: "#208A87",
        "light-green": "#EEFDF2",
        "dark-green": "#27cc52",
        "dark-grey": "#575757",
      },
      textColor: {
        "light-purple": "#F7F1FA",
        purple: "#39064D",
        "dark-purple": "#1C052A",
        secondary: "#25282B",
        "dark-grey": "#575757",
        "light-grey": "#A0A4A8",
        primary: "#222222",
        "light-primary": "#887297",
        "light-pink": "#E7E3EA",
        delete: "#FF656F",
        nav: "#999999",
        "light-green": "#EEFDF2",
        "dark-green": "#27cc52",
        "dark-red": "#FF656F",
      },
      backgroundColor: {
        "bg-light-purple": "#F7F1FA",
        purple: "#39064D",
        cream: "#F9F8F9",
        "light-pink": "#E7E3EA",
        delete: "#FF656F",
        "light-green": "#EEFDF2",
        "dark-green": "#27cc52",
        "light-red": "#FFF2F3",
        "dark-red": "#FF656F",
      },
      borderColor: {
        purple: "#39064D",
      },
    },
  },
  plugins: [],
};
