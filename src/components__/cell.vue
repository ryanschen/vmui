<template>
  <div class="sq-cell sq-hairline">
    <div class="sq-cell__label" v-if="label">
      <span>{{label}}</span>
    </div>
    <div class="sq-cell__value" :class="classes">
      <input
        class="sq-cell__control"
        :class="{'sq-cell__right': right}"
        :type="type"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="currentValue"
        @input="handleInput"
        @click="handleClick"
      >
      <div class="sq-cell__button" v-if="$slots.button">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-cell',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    label: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        'sq-cell__islink': this.arrow,
        'sq-cell__textright': this.right
      }
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    },
    handleInput (event) {
      let value = event.target.value
      this.setCurrentValue(value)
      this.$emit('input', value)
    },
    setCurrentValue (value) {
      if (value === this.currentValue) return
      this.currentValue = value
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  }
}

</script>
<style lang='scss'>
@import '../assets/style/components/cell';
</style>
