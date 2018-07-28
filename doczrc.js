import { babel } from 'docz-plugin-babel6'
import { css } from 'docz-plugin-css'

export default {
  dest: './docs',
  themeConfig: {
    mode: 'dark',
  },
  plugins: [
    babel(),
    css({
      preprocessor: 'postcss',
      cssmodules: true,
    }),
  ],
}
