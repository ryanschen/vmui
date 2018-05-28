<template>
  <div>
    <button @click="showToast">alert</button>
    <button @click="showToastsuccess">confirm</button>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {
    showToast () {
      this.$dialog.alert({
        title: '',
        message: '测试~~message',
        onConfirm: () => {
          console.log('点击了alert确认按钮')
          this.$dialog.hide()
        }
      })
    },
    showToastsuccess () {
      this.$dialog.confirm({
        title: '测试~~标题',
        message: '测试~~message',
        onConfirm: () => {
          console.log('点击了confirm确认按钮')
          this.$dialog.hide()
        },
        onCancel: () => {
          console.log('点击了confirm取消按钮')
          this.$dialog.hide()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
