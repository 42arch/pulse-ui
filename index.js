import Button from './packages/button/index.js';
import Switch from './packages/switch/index.js';
import Row from './packages/row/index.js';
import Col from './packages/col/index.js';


const components = [
  Button,
  Switch,
  Row,
  Col
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
  Switch,
  Row,
  Col
};