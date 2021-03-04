import resolve from "rollup-plugin-node-resolve"
import vue from "rollup-plugin-vue"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import image from "@rollup/plugin-image"

const config = {
  input: "./src/index.js", // 必须，入口文件
  external: ['vue'],
  output: {
    // name: 'ela-ui',
    // file: 'public/lib/ela-ui.esm.js',
    // format: 'iife',
    // extend: true,
    // globals: {
    //   vue: "Vue" // 告诉rollup全局变量Vue即是vue
    // }
  },
  plugins: [ // 引入的插件在这里配置
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: "**/node_modules/**"
    }),
    commonjs(),
    image()
  ]
}

export default config