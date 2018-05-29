<template>
  <div class="sq-cell-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cell-group',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.sq-cell-group {
  padding: 16px;
  .sq-cell {
    border-radius: 5px;
  }
  .sq-cell~.sq-cell {
    margin-top: 10px;
  }
  .sq-cell:not(:last-child)::after {
    border: 0;
  }
}
</style>
