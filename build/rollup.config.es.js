import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'ela-ui',
    file: 'public/lib/ela-ui.esm.js',
    format: 'iife',
    extend: true
  },
})


export default config