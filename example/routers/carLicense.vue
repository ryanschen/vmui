<template>
  <div class="demo-page-wrap">
    <sq-carlicense
      ref="carkeyboardWrapper"
      :provinceNameProp="provName"
      :carNumberProp="carNumber"
      placeholder="请输入车牌号"
    >
    </sq-carlicense>
    <sq-button type="primary" @click="getValue">{{ value }}</sq-button>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',

  data () {
    return {
      provName: '沪',
      carNumber: '',
      value: ''
    }
  },

  methods: {
    getValue () {
      this.value = this.$refs.carkeyboardWrapper.getValue()
    }
  }
}
</script>

<style scoped>

</style>
