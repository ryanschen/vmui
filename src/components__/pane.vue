<template>
  <div class="sq-tab-content" v-show="$parent.currentActive === name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-pane',

  props: {
    name: String,
    label: String
  },

  mounted () {
    this.$parent.updateNav()
  }
}
</script>
<style lang='scss' scoped>
</style>
