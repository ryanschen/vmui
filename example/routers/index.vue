<template>
  <div style="padding:20px;">
    <sq-demo title="基础组件" :list="list1"></sq-demo>
    <sq-demo title="表单组件" :list="list2"></sq-demo>
    <sq-demo title="操作反馈" :list="list3"></sq-demo>
    <!-- <sq-drop title="高阶组件" :list="list4"></sq-drop> -->
    <sq-demo title="业务组件" :list="list5"></sq-demo>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // 基础
      list1: [
        { to: 'button', name: 'Button - 按钮' },
        { to: 'tab', name: 'Tab - 标签页' },
        { to: 'popup', name: 'Popup - 弹出层' },
        { to: 'swiper', name: 'Swiper - 轮播' }
      ],
      // 表单
      list2: [
        { to: 'radio', name: 'Radio - 单选框' },
        { to: 'field', name: 'Field - 输入框' }
      ],
      // 操作反馈
      list3: [
        { to: 'actionsheet', name: 'Actionsheet - 行动按钮' },
        { to: 'dialog', name: 'Dialog - 对话框' },
        { to: 'picker', name: 'Picker - 选择器' },
        { to: 'toast', name: 'Toast - 轻提示' }
      ],
      // // 高阶组件
      // list4: [
      //   { to: 'carLicense', name: 'carLicense22' },
      // ],
      // 业务组件
      list5: [
        { to: 'agree', name: 'Agree - 勾选按钮' },
        { to: 'carLicense', name: 'CarLicense - 车牌录入键盘' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
