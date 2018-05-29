<template>
  <div>
    <sq-popup v-model="isShowLeft" position="left">left</sq-popup>
    <button @click="isShowLeft = !isShowLeft">isShowLeft</button>
    <sq-popup v-model="isShowRight" position="right">right</sq-popup>
    <button @click="isShowRight = !isShowRight">isShowRight</button>
    <sq-popup v-model="isShowTop" position="top">top</sq-popup>
    <button @click="isShowTop = !isShowTop">isShowTop</button>
    <sq-popup v-model="isShowBottom" position="bottom">bottom</sq-popup>
    <button @click="isShowBottom = !isShowBottom">isShowBottom</button>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      isShowLeft: false,
      isShowRight: false,
      isShowTop: false,
      isShowBottom: false
    }
  },

  methods: {}
}
</script>

<style lang="css" scoped>
</style>
