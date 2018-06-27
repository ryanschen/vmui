<template>
  <span class="sq-radio">
    <span @click="$_change" class="sq-radio-wrap">
      <span class="sq-radio-radioicon" :class="radioiconClasses"></span>
      <span class="sq-radio-text">
        <slot></slot>
      </span>
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

  computed: {
    radioiconClasses () {
      return [
        {
          'sq-radio-checked': this.name === this.currentValue
        }
      ]
    }
  },

  data () {
    return {
      currentValue: ''
    }
  },

  methods: {
    $_change () {
      this.$parent.update(this.name)
    }
  },

  mounted () {
    this.$parent.update()
  }
}

</script>
<style lang="scss">
@import '../../assets/style/components/var.scss';

.sq-radio {
  display: inline-block;
  &-wrap {
    display: flex;
    align-items: baseline;
  }
  &-radioicon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    background: #ccc;
    transform: translateY(-2px);
    &::before {
      content: '';
      width: .25em;
      height: .5em;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      transition: transform .2s ease-in-out;
      transform: rotate(45deg) scale(0) translateY(-1px) translateX(-1px);
    }
  }
  &-checked {
    background-color: $theme-color;
    &.sq-radio-radioicon {
      &::before {
        transform: rotate(45deg) scale(1) translateY(-1px) translateX(-1px);
      }
    }
  }
  &-text {
    display: inline-block;
    margin-left: 6px;
  }
}
</style>
