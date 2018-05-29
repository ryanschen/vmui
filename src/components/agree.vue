<template>
  <div class="sq-agree-wrap">
    <div class="sq-agree__checkbox" :class="[value ? 'sq-agree__checked' : '']" @click="$_handleClick"></div>
    <div class="sq-agree__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    value: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    $_handleClick (event) {
      this.$emit('input', !this.value)
    }
  }
}

</script>
<style lang="scss">
$theme-color: #0097DF;

.sq-agree-wrap {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  .sq-agree__checkbox {
    padding-right: 24px;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      background-color: #D8D8D8;
      position: absolute;
      left: 0;
      top: 3px;
      border-radius: 50%;
    }
    &::after {
      content: '';
      display: table;
      width: 4px;
      height: 8px;
      position: absolute;
      top: 6px;
      left: 6px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg) scale(0);
      transition: all .2s ease-in-out;
    }
  }
}
.sq-agree__checked.sq-agree__checkbox::before {
  background-color: $theme-color;
}
.sq-agree__checked.sq-agree__checkbox::after {
  transform: rotate(45deg) scale(1);
}
</style>
