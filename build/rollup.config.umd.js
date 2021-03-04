import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'ela-ui',
    file: 'public/lib/ela-ui.umd.js',
    format: 'umd',
    extend: true
  },
})

export default config
