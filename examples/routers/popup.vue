<template>
  <div class="demo-page-wrap">
    <sq-popup v-model="isShowDefault">default</sq-popup>
    <sq-button type="primary" @click="isShowDefault = !isShowDefault">isShowDefault</sq-button>
    <sq-popup v-model="isShowLeft" position="left">left</sq-popup>
    <sq-button type="primary" @click="isShowLeft = !isShowLeft">isShowLeft</sq-button>
    <sq-popup v-model="isShowRight" position="right">right</sq-popup>
    <sq-button type="primary" @click="isShowRight = !isShowRight">isShowRight</sq-button>
    <sq-popup v-model="isShowTop" position="top">top</sq-popup>
    <sq-button type="primary" @click="isShowTop = !isShowTop">isShowTop</sq-button>
    <sq-popup v-model="isShowBottom" position="bottom">bottom</sq-popup>
    <sq-button type="primary" @click="isShowBottom = !isShowBottom">isShowBottom</sq-button>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      isShowDefault: false,
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
