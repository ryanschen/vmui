import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/stepper', meta: { name: '步进器' }, component: () => import('../routers/stepper.vue') },
    { path: '/icon', meta: { name: '图标' }, component: () => import('../routers/icon.vue') },
    { path: '/accordion', meta: { name: '折叠面板' }, component: () => import('../routers/accordion.vue') },
    { path: '/switch', meta: { name: '开关' }, component: () => import('../routers/switch.vue') },
    { path: '/datepicker', meta: { name: '日期选择' }, component: () => import('../routers/datepicker.vue') },
    { path: '/loadmore', meta: { name: '加载更多' }, component: () => import('../routers/loadmore.vue') },
    { path: '/citySelector', meta: { name: '城市选择' }, component: () => import('../routers/citySelector.vue') },
    { path: '/noticeBar', meta: { name: '通告栏' }, component: () => import('../routers/noticeBar.vue') },
    { path: '/childinsuranceCell', meta: { name: '子险列表' }, component: () => import('../routers/childinsuranceCell.vue') },
    { path: '/swiper', meta: { name: '轮播图' }, component: () => import('../routers/swiper.vue') },
    { path: '/popup', meta: { name: '弹出层' }, component: () => import('../routers/popup.vue') },
    { path: '/picker', meta: { name: '选择器' }, component: () => import('../routers/picker.vue') },
    { path: '/agree', meta: { name: '勾选按钮' }, component: () => import('../routers/agree.vue') },
    { path: '/actionsheet', meta: { name: '行动按钮' }, component: () => import('../routers/actionsheet.vue') },
    { path: '/dialog', meta: { name: '对话框' }, component: () => import('../routers/dialog.vue') },
    { path: '/toast', meta: { name: '轻提示' }, component: () => import('../routers/toast.vue') },
    { path: '/radio', meta: { name: '单选框' }, component: () => import('../routers/radio.vue') },
    { path: '/field', meta: { name: '单元格' }, component: () => import('../routers/field.vue') },
    { path: '/cell', meta: { name: 'cell' }, component: () => import('../routers/cell.vue') },
    { path: '/tabs', meta: { name: '标签页' }, component: () => import('../routers/tabs.vue') },
    { path: '/carlicense', meta: { name: '车牌录入键盘' }, component: () => import('../routers/carlicense.vue') },
    { path: '/button', meta: { name: '按钮' }, component: () => import('../routers/button.vue') },
    { path: '/index', meta: { name: '首页' }, component: () => import('../routers/index.vue') },
    { path: '/', redirect: '/index' }
  ]
})
