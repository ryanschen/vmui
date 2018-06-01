<template>
  <span @click="change" class="sq-radio-wrap">
    <span class="sq-radio__wrap" :class="[name === currentValue ? 'sq-radio__checked' : '']"></span>
    <span>
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  /**
   * name在radioGroup组件逻辑引用，若修改name值，则radioGroup中需相应修改
   */
  name: 'sq-radio',

  props: {
    name: {
      type: null,
      required: true
    }
  },

  data () {
    return {
      currentValue: ''
    }
  },

  methods: {
    change () {
      this.$parent.update(this.name)
    }
  },

  mounted () {
    this.$parent.update()
  }
}

</script>
<style lang='scss'>
$theme-color: #0097DF;

.sq-radio-wrap {
  display: inline-flex;
}

.sq-radio__wrap {
  padding-right: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-color: #D8D8D8;
    position: absolute;
    left: 0;
    border-radius: 50%;
  }
  &::after {
    content: '';
    display: table;
    width: 4px;
    height: 8px;
    position: absolute;
    top: 5px;
    left: 6px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(0);
    transition: all .2s ease-in-out;
  }
}
.sq-radio__checked.sq-radio__wrap::before {
  background-color: $theme-color;
}
.sq-radio__checked.sq-radio__wrap::after {
  transform: rotate(45deg) scale(1);
}
</style>
