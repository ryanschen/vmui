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
        onOk: () => {
          console.log('点击了alert确认按钮')
          this.$dialog.hide()
        }
      })
    },
    showToastsuccess () {
      this.$dialog.confirm({
        title: '测试~~标题',
        message: '测试~~message',
        onCancel: () => {
          this.$dialog.hide()
        },
        onOk: () => {
          console.log('点击了confirm确认按钮')
          this.$dialog.hide()
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
