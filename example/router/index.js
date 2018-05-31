import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/checkbox',
    //   component: () => import('../routers/checkbox.vue')
    // },
    {
      path: '/swiper',
      meta: {
        name: '轮播图'
      },
      component: () => import('../routers/swiper.vue')
    },
    {
      path: '/popup',
      meta: {
        name: '弹出层'
      },
      component: () => import('../routers/popup.vue')
    },
    {
      path: '/picker',
      meta: {
        name: '选择器'
      },
      component: () => import('../routers/picker.vue')
    },
    {
      path: '/agree',
      meta: {
        name: '勾选按钮'
      },
      component: () => import('../routers/agree.vue')
    },
    {
      path: '/actionsheet',
      meta: {
        name: '行动按钮'
      },
      component: () => import('../routers/actionsheet.vue')
    },
    {
      path: '/dialog',
      meta: {
        name: '对话框'
      },
      component: () => import('../routers/dialog.vue')
    },
    {
      path: '/toast',
      meta: {
        name: '轻提示'
      },
      component: () => import('../routers/toast.vue')
    },
    {
      path: '/radio',
      meta: {
        name: '单选框'
      },
      component: () => import('../routers/radio.vue')
    },
    {
      path: '/field',
      meta: {
        name: '单元格'
      },
      component: () => import('../routers/field.vue')
    },
    {
      path: '/tab',
      meta: {
        name: '标签页'
      },
      component: () => import('../routers/tab.vue')
    },
    {
      path: '/carLicense',
      meta: {
        name: '车牌录入键盘'
      },
      component: () => import('../routers/carLicense.vue')
    },
    {
      path: '/button',
      meta: {
        name: '按钮'
      },
      component: () => import('../routers/button.vue')
    },
    {
      path: '/index',
      meta: {
        name: '首页'
      },
      component: () => import('../routers/index.vue')
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
