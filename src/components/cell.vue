<template>
  <div class="sq-cell-wrap" :class="classes">
    <div
      class="sq-cell-head"
      v-if="title !== void 0 && title !== null || $slots.title"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      class="sq-cell-bd"
      v-if="value !== void 0 && value !== null || $slots.default"
      @click="$_click"
    >
      <slot>
        {{ value }}
      </slot>
    </div>
    <slot name="right-icon">
      <i v-if="isLink" class="sq-cell-ft"/>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'sq-cell',

  props: {
    value: {
      type: [Number, String]
    },
    title: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return [
        {
          'sq-cell__islink': this.isLink
        }
      ]
    }
  },

  data () {
    return {
    }
  },

  methods: {
    $_click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/mixins.scss';

.sq-cell-wrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  padding: 13px 16px;
  &~.sq-cell-wrap {
    @include mix-1px($top: 1);
  }
  .sq-cell-bd {
    flex: 1;
    text-align: right;
  }
  .sq-cell-ft {
    padding-left: 10px;
  }
}
// arrow
.sq-cell__islink {
  position: relative;
}
.sq-cell__islink::after {
  content: "";
  display: block;
  position: absolute;
  width: 10px;
  right: 14px;
  top: 50%;
  margin-top: -5px;
  height: 10px;
  border-right: 2px solid #e6e6e6;
  border-top: 2px solid #e6e6e6;
  box-sizing: border-box;
  transform: rotate(45deg);
}
</style>
