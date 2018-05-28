// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import SqKeyboard from '@/components/CarLicense'
import SqButton from '@/components/button'
import SqPane from '@/components/pane'
import SqTabs from '@/components/tabs'
import SqCell from '@/components/cell'
import SqRadio from '@/components/radio'
import SqActionsheet from '@/components/actionsheet'
import SqAgree from '@/components/agree'
import SqPicker from '@/components/picker'

import SqToast from '@/components/toast/index.js'
import SqDialog from '@/components/dialog/index.js'

Vue.component('SqKeyboard', SqKeyboard)
Vue.component('SqButton', SqButton)
Vue.component('SqPane', SqPane)
Vue.component('SqTabs', SqTabs)
Vue.component('SqCell', SqCell)
Vue.component('SqRadio', SqRadio)
Vue.component('SqActionsheet', SqActionsheet)
Vue.component('SqAgree', SqAgree)
Vue.component('SqPicker', SqPicker)

Vue.use(SqToast)
Vue.use(SqDialog)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
