<template>
  <div class="sq-malltab-content" v-show="$parent.currentActive === name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'malltab-pane',

  props: {
    name: String,
    label1: String,
    label2: String
  },

  mounted () {
    this.$parent.updateNav()
  }
}
</script>
<style lang='scss' scoped>
</style>
