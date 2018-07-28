import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types'],
  plugins: [
    eslint({
      throwOnError: true,
    }),
    postcss({
      plugins: [],
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],
}
