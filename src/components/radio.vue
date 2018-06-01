<template>
  <label @click="change">
    <!-- <span style="position:relative;">
      <span class="label ry-radio blue"></span>
      <input type="radio" :checked="name == currentValue">
    </span> -->
    <div class="sq-agree__checkbox" :class="[name == currentValue ? 'sq-agree__checked' : '']"></div>
    <slot></slot>
  </label>
</template>

<script>
export default {
  /**
   * name在radioGroup组件逻辑引用，若修改name值，则radioGroup中需相应修改
   */
  name: 'sq-radio',

  props: {
    name: {
      type: String,
      required: true
    }
    // ,
    // checked: {
    //   type: Boolean,
    //   default: false
    // }
  },

  data () {
    return {
      currentValue: ''
    }
  },

  methods: {
    change () {
      console.log(222, this.name)
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

// .sq-agree-wrap {
//   display: -webkit-box;
//   display: -moz-box;
//   display: -webkit-flex;
//   display: -ms-flexbox;
//   display: box;
//   display: flex;
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
// }
.sq-agree__checked.sq-agree__checkbox::before {
  background-color: $theme-color;
}
.sq-agree__checked.sq-agree__checkbox::after {
  transform: rotate(45deg) scale(1);
}
//----------------
input {
  margin: 0;
}
/*radio css*/
 .ry-radio{
  cursor: pointer;
  // margin-right: 4px;
  position: relative;
  vertical-align: middle;
  font-size: 16px;
}
.ry-radio:before{
  content: "";
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1px solid #d7dde4;
  background-color: #fff;
  border-color: #1890ff;
}
.blue.ry-radio:before{
  background-color: #1890ff;
  border-color: #fff;
}
.ry-radio:before{
  border-radius: 2px;
}
// .ry-radio~input[type='checkbox']{
//   margin-right: 6px;
// }
.ry-radio~input[type='radio']:after{
  content: "";
  display: inline-block;
  position: absolute;
  left: 2px;
  top: 5px;
  width: 0;
  height: 0;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
  border-color: #fff;
  transition-duration: 0.2s;
  opacity: 0;
}
.ry-radio~input[type='radio']:after{
  border-radius: 2px;
}
.ry-radio~input[type='radio']:checked:after{
  background-color: #1890ff;
  border-color: #1890ff;
}
.ry-radio~input[type='radio']:checked:after{
  background-color: #fff;
  border: 2px solid #1890ff;
  transform: rotate(-50deg);
  border-top: none;
  border-right: none;
  width: 12px;
  height: 6px;
  box-sizing: border-box;
  border-radius: 2px;
  opacity: 1;
}
.blue.ry-radio~input[type='radio']:checked:after{
  background-color: #1890ff;
  border-color: #fff;
}
// .ry-radio~input[type='checkbox']:checked:after{
//   left: 2px;
//   top: 5px;
// }
</style>
