<template>
  <div>
    <button @click="showToast">默认3s关闭关闭</button>
    <button @click="showToastsuccess">0.5s关闭</button>
    <button @click="showToasterror">-1,不关闭，通过JS关闭</button>
    <button @click="showTloading">loading</button>
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
      this.$toast.text('测试~~')
    },
    showToastsuccess () {
      this.$toast.success('测试~~showToastsuccess', 500)
    },
    showToasterror () {
      this.$toast.error('测试~~showToasterror', -1)
      setTimeout(() => {
        this.$toast.hide(() => {
          console.log(22)
        })
      }, 15000)
    },
    showTloading () {
      this.$toast.loading('测试~~loading')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
