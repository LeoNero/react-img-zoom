const postCss = require('postcss-modules')

module.exports = ctx => ({
  plugins: [
    postCss({
      getJSON: ctx.extractModules || (() => {}),
    }),
  ],
})
