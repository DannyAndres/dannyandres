const colors = require('tailwindcss/colors');

module.exports = {
  purge:["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      navbar: '#161b22',
      gray: colors.coolGray,
      green: colors.teal,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
