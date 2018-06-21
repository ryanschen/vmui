<template>
  <div class="sq-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sq-radio-group',

  props: {
    value: {
      type: null,
      required: true
    }
  },

  methods: {
    getChildrens () {
      return this.$children.filter(item => item.$options.name === 'sq-radio')
    },

    update (currentValue) {
      if (currentValue) {
        this.$emit('input', currentValue)
        return
      }
      const children = this.getChildrens()

      children.forEach(item => {
        if (this.value === item.name) {
          item.currentValue = this.value
        }
      })
    }
  },

  watch: {
    value (val) {
      const children = this.getChildrens()

      children.forEach(item => {
        item.currentValue = val
      })

      this.$emit('change', val)
    }
  }
}
</script>

<style lang="scss">
</style>
