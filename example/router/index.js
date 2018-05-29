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
      path: '/popup',
      component: () => import('../routers/popup.vue')
    },
    {
      path: '/picker',
      component: () => import('../routers/picker.vue')
    },
    {
      path: '/agree',
      component: () => import('../routers/agree.vue')
    },
    {
      path: '/actionsheet',
      component: () => import('../routers/actionsheet.vue')
    },
    {
      path: '/dialog',
      component: () => import('../routers/dialog.vue')
    },
    {
      path: '/toast',
      component: () => import('../routers/toast.vue')
    },
    {
      path: '/radio',
      component: () => import('../routers/radio.vue')
    },
    {
      path: '/cell',
      component: () => import('../routers/cell.vue')
    },
    {
      path: '/tab',
      component: () => import('../routers/tab.vue')
    },
    {
      path: '/carLicense',
      component: () => import('../routers/carLicense.vue')
    },
    {
      path: '/button',
      component: () => import('../routers/button.vue')
    }
  ]
})
