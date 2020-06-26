const production = process.env.HUGO_ENVIRONMENT === 'production'

module.exports = {
  purge: {
    enabled: production,
    content: [
      './assets/js/**/*.js',
      './content/**/*.html',
      './layouts/**/*.html'
    ]
  },
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
      colors: {
        coal: "#262626",
        gainsboro: "#dcdcdc",
        silver: "#a0a0a0",
      }
    }
  },
  variants: {},
  plugins: []
}
