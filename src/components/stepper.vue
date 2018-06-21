<template>
  <div class="sq-stepper">
    <div class="sq-stepper-wrap">
      <span class="sq-stepper-left" :class="cutClasses" @click="$_cut">
        <i class="iconfont icon-jian"></i>
      </span>
      <input
        type="text"
        pattern="[0-9]*"
        class="sq-stepper-input"
        v-model.number="currentVal"
        :readonly="readonlyInput"
        :disabled="disabledInput"
      >
      <span class="sq-stepper-right" :class="addClasses" @click="$_add">
        <i class="iconfont icon-jia"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-stepper',

  props: {
    max: {
      type: [Number, String]
    },
    min: {
      type: [Number, String]
    },
    value: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: [Number, String],
      default: 1
    },
    readonlyInput: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    cutClasses () {
      return [
        {
          'sq-stepper-cut-disabled': this.disabledCut
        }
      ]
    },
    addClasses () {
      return [
        {
          'sq-stepper-add-disabled': this.disabledAdd
        }
      ]
    }
  },

  data () {
    return {
      currentVal: this.value,
      disabledInput: false,
      disabledCut: false,
      disabledAdd: false
    }
  },

  methods: {
    $_cut () {
      if (this.disabledCut) return

      this.currentVal -= +this.step
      // if ((this.currentVal - +this.step) <= this.min) {
      // }
    },
    $_add () {
      if (this.disabledAdd) return

      this.currentVal += +this.step
      // if ((this.currentVal + +this.step) >= this.max) {
      // }
    }
  },

  watch: {
    currentVal (val, oldVal) {
      console.log(this.disabledAdd)
      console.log(this.max !== void 0 && val >= this.max)
      if (this.max !== void 0 && val >= this.max) {
        this.currentVal = +oldVal
        this.$emit('input', +oldVal)
        this.disabledAdd = true
        return
      }
      if (this.min !== void 0 && val <= this.min) {
        this.currentVal = +oldVal
        this.$emit('input', +oldVal)
        this.disabledCut = true
        return
      }
      console.log(345)
      if (val < this.max && this.disabledAdd) {
        this.disabledAdd = false
      }
      if (val > this.min && this.disabledCut) {
        this.disabledCut = false
      }
      this.$emit('input', this.currentVal)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/components/var.scss';

.sq-stepper {
  display: inline-block;
  background-color: #fff;
  &-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-left,
  &-right {
    border: 1px solid $theme-color;
    color: $theme-color;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 27px;
    height: 27px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  &-input {
    position: relative;
    width: 40px;
    height: 27px;
    margin: 0 5px;
    padding: 0;
    font-size: 16px;
    color: #333;
    text-align: center;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
  }
  &-cut-disabled,
  &-add-disabled {
    border-color: #ccc;
    color: #ccc;
  }
}
</style>
