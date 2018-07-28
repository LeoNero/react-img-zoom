import { babel } from 'docz-plugin-babel6'
import { css } from 'docz-plugin-css'

export default {
  title: 'react-img-zoom',
  description: 'A React component to zoom images on hover',
  dest: '/docs',
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
