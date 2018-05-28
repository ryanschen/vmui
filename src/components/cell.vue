<template>
  <div class="sq-cell sq-hairline">
    <div class="sq-cell__label" v-if="label">
      <span>{{label}}</span>
    </div>
    <div class="sq-cell__value" :class="classes">
      <input
        v-if="!$slots.control"
        class="sq-cell__control"
        :class="{'sq-cell__right': right}"
        :type="type"
        :value="value"
        :style="iptStyle"
        v-bind="$attrs"
        v-on="listeners"
      >
      <slot name="control"></slot>
      <div class="sq-cell__button" v-if="$slots.button">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-cell',

  inheritAttrs: false,

  props: {
    iptStyle: {
      type: Object
    },
    right: {
      type: Boolean,
      default: false
    },
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    arrow: {
      type: Boolean,
      default: false
    },
    value: null
  },

  computed: {
    classes () {
      return {
        'sq-cell__islink': this.arrow,
        'sq-cell__textright': this.right
      }
    },
    listeners () {
      return {
        ...this.$listeners,
        input: this.onInput
      }
    }
  },

  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}

</script>
<style lang='scss'>
@import '../assets/style/components/cell';
</style>
