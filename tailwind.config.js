module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sheertex: "#ddff98",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
// backgroundColor: (theme) => ({
//   ...theme("colors"),
//   sheertex: "#ddff98",
// }),
