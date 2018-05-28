<template>
  <label>
    <span style="position:relative;">
      <span class="label ry-radio blue"></span>
      <input type="radio" name="carRadio" :checked="checked">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>

<script>
export default {
  name: 'sq-radio',

  props: {
    label: String,
    checked: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
    }
  },

  methods: {}
}

</script>
<style lang='scss'>
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
