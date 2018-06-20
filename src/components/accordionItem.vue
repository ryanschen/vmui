<template>
  <div class="sq-accordion-item">
    <p class="sq-addordion-item-title" @click="$_click">折叠面板</p>
    <div class="sq-addordion-item-content">
      提供多样店铺模板，快速搭建网上商城
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-accordion-item',

  props: {
    name: {
      type: null,
      required: true
    }
  },

  data () {
    return {
      currentValue: []
    }
  },

  methods: {
    $_click () {
      this.$parent.update(this.name)
    }
  },

  mounted () {
    this.$parent.update()
  }
}
</script>

<style lang="scss">
</style>
