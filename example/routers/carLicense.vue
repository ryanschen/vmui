<template>
  <div class="keyboard">
    <sq-keyboard
      ref="carkeyboardWrapper"
      :provinceNameProp="provName"
      :carNumberProp="carNumber"
      placeholder="请输入车牌号"
    >
    </sq-keyboard>
    <input type="button" value="getValue" @click="getValue">：{{ value }}
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
