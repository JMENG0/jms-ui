//包的入口文件
//定义install方法

import JmsButton from './button/button'
import JmsDialog from './dialog/dialog'
import JmsSwitch from './switch/switch'
import JmsInput from './input/input'
import JmsRadio from './radio/radio'
import JmsRadioGroup from './radio/radio-group'
import JmsCheckbox from './checkbox/checkbox'
import JmsCheckboxGroup from './checkbox/checkbox-group'
import JmsForm from './form/form'
import JmsFormItem from './form/form-item'
import "./fonts/font.scss"

const components = [
  JmsButton,
  JmsDialog,
  JmsSwitch,
  JmsInput,
  JmsRadio,
  JmsRadioGroup,
  JmsCheckbox,
  JmsCheckboxGroup,
  JmsForm,
  JmsFormItem
]

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item);
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
