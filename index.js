import Button from './packages/button/index.js';
import Switch from './packages/switch/index.js';

const components = [
  Button,
  Switch
];

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Switch
};