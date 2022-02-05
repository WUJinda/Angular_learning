module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      transitionProperty: ['active'],
      transform: ['active'],
      opacity: ['active'],
      scale: ['active'],
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
