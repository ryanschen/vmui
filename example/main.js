// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import SqDemo from '@/components/demo'

import SqCarlicense from '@/components/carlicense'
import SqButton from '@/components/button'
import SqPane from '@/components/pane'
import SqTabs from '@/components/tabs'
import SqField from '@/components/field'
import SqCell from '@/components/cell'
import SqCellgroup from '@/components/cellgroup'
import SqFieldgroup from '@/components/fieldGroup'
import SqRadio from '@/components/radio'
import SqRadiogroup from '@/components/radioGroup'
import SqActionsheet from '@/components/actionsheet'
import SqAgree from '@/components/agree'
import SqPicker from '@/components/picker'
import SqPopup from '@/components/popup'
import SqSwiper from '@/components/swiper'
import SqChildinsuranceCell from '@/components/childinsuranceCell'
import SqNoticeBar from '@/components/noticeBar'
import SqCitySelector from '@/components/citySelector'
import SqLoadmore from '@/components/loadmore'

import SqToast from '@/components/toast/index.js'
import SqDialog from '@/components/dialog/index.js'

const components = [
  SqDemo,
  SqCarlicense,
  SqButton,
  SqPane,
  SqTabs,
  SqField,
  SqCell,
  SqCellgroup,
  SqFieldgroup,
  SqRadiogroup,
  SqRadio,
  SqActionsheet,
  SqAgree,
  SqPicker,
  SqPopup,
  SqSwiper,
  SqChildinsuranceCell,
  SqNoticeBar,
  SqCitySelector,
  SqLoadmore
]

components.forEach(component => {
  Vue.component(component.name, component)
})

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
