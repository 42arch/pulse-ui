import Option from './src/main.vue'

Option.install = function (Vue) {
  Vue.component(Option.name, Option)
}

export default Option