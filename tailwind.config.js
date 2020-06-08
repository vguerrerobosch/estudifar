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
    extend: {}
  },
  variants: {},
  plugins: []
}
