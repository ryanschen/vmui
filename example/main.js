// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SqDemo from '@/components/demo'

import SqKeyboard from '@/components/CarLicense'
import SqButton from '@/components/button'
import SqPane from '@/components/pane'
import SqTabs from '@/components/tabs'
import SqField from '@/components/field'
import SqFieldgroup from '@/components/fieldGroup'
import SqRadio from '@/components/radio'
import SqActionsheet from '@/components/actionsheet'
import SqAgree from '@/components/agree'
import SqPicker from '@/components/picker'
import SqPopup from '@/components/popup'
import SqSwiper from '@/components/swiper'
// import SqCheckbox from '@/components/checkbox'

import SqToast from '@/components/toast/index.js'
import SqDialog from '@/components/dialog/index.js'
Vue.component('SqDemo', SqDemo)

Vue.component('SqKeyboard', SqKeyboard)
Vue.component('SqButton', SqButton)
Vue.component('SqPane', SqPane)
Vue.component('SqTabs', SqTabs)
Vue.component('SqField', SqField)
Vue.component('SqFieldgroup', SqFieldgroup)
Vue.component('SqRadio', SqRadio)
Vue.component('SqActionsheet', SqActionsheet)
Vue.component('SqAgree', SqAgree)
Vue.component('SqPicker', SqPicker)
Vue.component('SqPopup', SqPopup)
Vue.component('SqSwiper', SqSwiper)
// Vue.component('SqCheckbox', SqCheckbox)

Vue.use(SqToast)
Vue.use(SqDialog)


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.name ? `${to.path.replace('/', '')}-${to.meta.name}` : 'ui-demo'
  next()
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
