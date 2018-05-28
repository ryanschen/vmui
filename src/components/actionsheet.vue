<style lang="scss">
// 内容从下往上动画
@keyframes ry-slide-bottom-enter {
  from {
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes ry-slide-bottom-leave {
  to {
    transform: translate3d(0, 100%, 0);
  }
}
.ry-slide-bottom {
  &-enter-active {
    animation: ry-slide-bottom-enter .3s both ease;
  }

  &-leave-active {
    animation: ry-slide-bottom-leave .3s both ease;
  }
}
// 蒙层渐变动画
@keyframes ry-fade-enter {
  from {
    opacity: 0;
  }
}

@keyframes ry-fade-leave {
  to {
    opacity: 0;
  }
}
.ry-fade {
  &-enter-active {
    animation: ry-fade-enter .3s both ease;
  }

  &-leave-active {
    animation: ry-fade-leave .3s both ease;
  }
}
.action-mark {
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
.action-content {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  text-align: center;
  background-color: #EFEFF4;
  .action-row {
    color: #333;
    background-color: #fff;
    font-size: 18px;
    box-sizing: content-box;
    padding: 16px 0;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
    &:last-child {
      margin-top: 6px;
      border-top: 0;
    }
  }
}
</style>

<template>
  <div class="action-wrap">
    <transition name="ry-fade">
      <div class="action-mark" v-show="isShow" @click="$_cancel"></div>
    </transition>
    <transition name="ry-slide-bottom">
      <div class="action-content" v-show="isShow">
        <div class="action-row" @click="$_clickItem(item)" v-for="(item, index) in actionList" :key="index">{{ item.name }}</div>
        <div class="action-row" @click="$_cancel">取消</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'actionsheet',

  props: {
    value: {
      type: Boolean
    },
    actionList: {
      // type: Array,
      default: []
    },
    actionFun: {
      type: Function,
      default: () => {}
    }
  },

  data () {
    return {
      isShow: this.value
    }
  },

  methods: {
    $_clickItem (item) {
      this.actionFun(item)
      this.isShow = false
    },
    $_cancel () {
      this.isShow = false
    }
  },

  watch: {
    isShow (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.isShow = val
    }
  }
}
</script>
