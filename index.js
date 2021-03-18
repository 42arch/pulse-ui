import Button from './packages/button/index.js';
import ButtonGroup from './packages/button-group/index.js';
import Radio from './packages/radio/index.js';
import Switch from './packages/switch/index.js';
import Row from './packages/row/index.js';
import Col from './packages/col/index.js';
import Loading from './packages/loading/index.js';


const components = [
  Button,
  ButtonGroup,
  Radio,
  Switch,
  Row,
  Col,
  Loading
]

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  ButtonGroup,
  Radio,
  Switch,
  Row,
  Col,
  Loading
}