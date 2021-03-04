// import vue from 'rollup-plugin-vue';
import ElaButton from './button.vue';

ElaButton.install = function(Vue) {
  Vue.component(ElaButton.name, ElaButton)
}
export default ElaButton;