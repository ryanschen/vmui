<template>
  <div class="demo-page-wrap">
    <h4>基本样式</h4>
    <sq-stepper v-model="val1" max="8"/>{{ val1 }}
    <h4>disabled-input</h4>
    <sq-stepper readonly-input v-model="val2" step="2" min="0"/>{{ val2 }}
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      val1: 2,
      val2: 3
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
