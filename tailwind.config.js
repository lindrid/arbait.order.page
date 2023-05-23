module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
      require("tw-elements/dist/plugin")
  ],
}
