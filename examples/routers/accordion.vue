<template>
  <div>
    <div class="accordion">
      <div class="accordion-title accordion-arrow" :class="openClasses" @click="click">一级选项1</div>
      <div class="accordion-content accordion-content-anmiation" :class="contentClasses">
        <div>下拉内容展示</div>
        <div>下拉内容展示</div>
        <div>下拉内容展示</div>
      </div>
    </div>
    <div class="accordion">
      <div class="accordion-title accordion-arrow" :class="openClasses" @click="click">一级选项1</div>
      <div class="accordion-content accordion-content-anmiation" :class="contentClasses">
        <div>下拉内容展示</div>
        <div>下拉内容展示</div>
        <div>下拉内容展示</div>
      </div>
    </div>
    <!-- <div class="accordion">
      <div class="accordion-title accordion-arrow">一级选项1</div>
      <div class="accordion-content">下拉内容展示</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      flag: false
    }
  },

  computed: {
    openClasses () {
      return [
        {
          'accordion-open': this.flag
        }
      ]
    },
    contentClasses () {
      return [
        {
          'accordion-content-anmiation': this.flag
        }
      ]
    }
  },

  methods: {
    click () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  background-color: #fff;
  font-size: 15px;
  &-title {
    height: 50px;
    padding: 14px 16px;
    box-sizing: border-box;
  }
  &-content {
    // border-top: 1px solid #e6e6e6;
    box-sizing: border-box;
  }
  &-content.accordion-content-anmiation {
    height: 0;
    overflow: hidden;
    border-top: 0;
    transition: all .2s ease-in-out;
  }
  &-open~.accordion-content-anmiation {
    border-top: 1px solid #e6e6e6;
    height: auto;
  }
  &~& {
    border-top: 1px solid #e6e6e6;
  }
  &-arrow {
    position: relative;
  }
  &-open.accordion-arrow {
    &::after {
      transform: rotate(135deg);
    }
  } 
  &-arrow::after {
    content: "";
    display: block;
    position: absolute;
    top: 20px;
    right: 14px;
    width: 10px;
    height: 10px;
    border-right: 2px solid #999999;
    border-top: 2px solid #999999;
    box-sizing: border-box;
    transform: rotate(-45deg);
    transition: transform .2s ease-in-out;
  }
}

</style>
