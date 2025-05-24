// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class", // or 'media'
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // This only overrides or adds a custom pink-400
        "pink-400": "#f472b6",
      },
    },
  },
  plugins: [],
};
