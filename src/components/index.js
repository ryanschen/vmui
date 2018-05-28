import Navbar from './Navbar.vue'

import CarLicense from './CarLicense'
import SqButton from './button.vue'
import SqCell from './cell.vue'
import SqTabs from './tabs.vue'
import SqMalltabs from './malltabs.vue'
import SqAgree from './agree.vue'
import SqCheckbox from './checkbox.vue'
import SqPane from './pane.vue'
import SqMallpane from './mallpane.vue'
import SqAccordion from './accordion.vue'
// 插件
import SqDialog from './dialog'
import SqToast from './toast'

export default(Vue) => {
  Vue.component('navbar', Navbar)

  Vue.component('CarLicense', CarLicense)
  Vue.component('SqButton', SqButton)
  Vue.component('SqCell', SqCell)
  Vue.component('SqTabs', SqTabs)
  Vue.component('SqPane', SqPane)
  Vue.component('SqMalltabs', SqMalltabs)
  Vue.component('SqMallpane', SqMallpane)
  Vue.component('SqAgree', SqAgree)
  Vue.component('SqCheckbox', SqCheckbox)
  Vue.component('SqAccordion', SqAccordion)
  Vue.use(SqDialog)
  Vue.use(SqToast)
}
