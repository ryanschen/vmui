<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sq-radiogroup',

  props: {
    value: {
      type: [ String, Number ],
      required: true
    }
  },

  data () {
    return {
    }
  },

  methods: {
    getChildrens () {
      return this.$children.filter(item => item.$options.name === 'sq-radio')
    },

    update (currentValue) {
      console.log('currentValue', currentValue)
      if (currentValue) {
        this.$emit('input', currentValue)
        return
      }
      const children = this.getChildrens()

      children.forEach(item => {
        console.log('item:', item)
        if (this.value === item.name) {
          item.currentValue = this.value
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
