// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import SqDemo from '@/components/demo'

import SqCarlicense from '@/components/carlicense'
import SqButton from '@/components/button'
import SqTabpane from '@/components/tabpane'
import SqTabs from '@/components/tabs'
import SqField from '@/components/field'
import SqCell from '@/components/cell'
import SqCellgroup from '@/components/cellgroup'
import SqFieldgroup from '@/components/fieldGroup'
import SqRadioItem from '@/components/radioItem'
import SqRadioGroup from '@/components/radioGroup'
import SqActionsheet from '@/components/actionsheet'
import SqAgree from '@/components/agree'
import SqPicker from '@/components/picker'
import SqPopup from '@/components/popup'
import SqSwiper from '@/components/swiper'
import SqChildinsuranceCell from '@/components/childinsuranceCell'
import SqNoticeBar from '@/components/noticeBar'
import SqCitySelector from '@/components/citySelector'
import SqLoadmore from '@/components/loadmore'
import SqDatepicker from '@/components/datepicker'
import SqSwitch from '@/components/switch'
import SqAccordion from '@/components/accordion'
import SqAccordionItem from '@/components/accordionItem'

import SqToast from '@/components/toast/index.js'
import SqDialog from '@/components/dialog/index.js'

import '../src/assets/icon/iconfont.css'

const components = [
  SqDemo,
  SqCarlicense,
  SqButton,
  SqTabpane,
  SqTabs,
  SqField,
  SqCell,
  SqCellgroup,
  SqFieldgroup,
  SqRadioGroup,
  SqRadioItem,
  SqActionsheet,
  SqAgree,
  SqPicker,
  SqPopup,
  SqSwiper,
  SqChildinsuranceCell,
  SqNoticeBar,
  SqCitySelector,
  SqLoadmore,
  SqDatepicker,
  SqSwitch,
  SqAccordion,
  SqAccordionItem
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
