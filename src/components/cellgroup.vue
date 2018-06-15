<template>
  <div class="sq-cellgroup-wrap">
    <div class="sq-cellgroup" v-if="title !== void 0 && title !== null || label !== void 0 && label !== null">
      <div class="sq-cellgroup-left">{{ title }}</div>
      <div class="sq-cellgroup-right" @click="$_click">{{ label }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sq-cellgroup',

  props: {
    title: {
      type: String
    },
    label: {
      type: String
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
@import '../assets/style/components/var.scss';

.sq-cellgroup {
  height: 44px;
  font-size: 13px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sq-cellgroup-left {
    color: #666;
  }
  .sq-cellgroup-right {
    color: $theme-color;
  }
}
</style>
