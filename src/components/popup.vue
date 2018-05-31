<template>
  <div class="picker">
    <transition name="ry-fade">
      <div class="mask" v-show="value" @click="$_cancel"></div>
    </transition>
    <transition :name="transitionSlideType">
      <div
        class="content"
        v-show="value"
        :class="positionClass"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
const objTransitionSlideType = {
  bottom: 'ry-slide-bottom',
  left: 'ry-slide-left',
  top: 'ry-slide-top',
  right: 'ry-slide-right',
  default: 'ry-fade'
}

export default {
  name: 'sq-popup',

  props: {
    position: {
      type: String,
      default: 'default'
    },
    value: {
      type: Boolean,
      required: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    positionClass () {
      return [ `popup-${this.position}` ]
    },
    transitionSlideType () {
      return objTransitionSlideType[this.position]
    }
  },

  methods: {
    $_cancel () {
      if (!this.closeOnClickOverlay) return
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss">
$theme-color: #4a90e2;
// 内容从右往左动画
@keyframes ry-slide-right-enter {
  from {
    transform: translate3d(100%, 0, 0);
  }
}

@keyframes ry-slide-right-leave {
  to {
    transform: translate3d(100%, 0, 0);
  }
}
.ry-slide-right {
  &-enter-active {
    animation: ry-slide-right-enter .3s both ease;
  }

  &-leave-active {
    animation: ry-slide-right-leave .3s both ease;
  }
}
// 内容从左往右动画
@keyframes ry-slide-left-enter {
  from {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ry-slide-left-leave {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
.ry-slide-left {
  &-enter-active {
    animation: ry-slide-left-enter .3s both ease;
  }

  &-leave-active {
    animation: ry-slide-left-leave .3s both ease;
  }
}
// 内容从上往下动画
@keyframes ry-slide-top-enter {
  from {
    transform: translate3d(0, -100%, 0);
  }
}

@keyframes ry-slide-top-leave {
  to {
    transform: translate3d(0, -100%, 0);
  }
}
.ry-slide-top {
  &-enter-active {
    animation: ry-slide-top-enter .3s both ease;
  }

  &-leave-active {
    animation: ry-slide-top-leave .3s both ease;
  }
}
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

.top-line {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
.bottom-line {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1010;
}
.content.popup-top {
  left: 0;
  right: 0;
  top: 0;
}
.content.popup-bottom {
  left: 0;
  right: 0;
  bottom: 0;
}
.content.popup-left {
  top: 0;
  left: 0;
  width: 60%;
  bottom: 0;
}
.content.popup-right {
  top: 0;
  right: 0;
  width: 60%;
  bottom: 0;
}
.content.popup-default {
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.content {
  z-index: 1011;
  position: fixed;
  background-color: #fff;
  .header {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    :nth-child(1) {
      width: 80px;
      flex: 0 0 80px;
      color: $theme-color;
      font-size: 16px;
    }
    :nth-child(2) {
      flex: 1;
    }
    :nth-child(3) {
      width: 80px;
      flex: 0 0 80px;
      color: $theme-color;
      font-size: 16px;
    }
  }
  .body {
    height: 240px;
    line-height: 48px;
    position: relative;
    display: flex;
    background-color: #fff;
    overflow: hidden;
    .wrapper {
      flex: 1;
      position: relative;
      height: 100%;
      .item-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
          linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
        background-position: top, bottom;
        background-size: 100% 96px;
        background-repeat: no-repeat;
        z-index: 1014;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .line {
        width: 100%;
        height: 48px;
        position: absolute;
        left: 0;
        top: 96px;
        z-index: 1013;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1011;
        .item {
          height: 48px;
          &.bottom-line {
            &:last-child::after {
              border: 0;
            }
          }
        }
      }
    }
  }
}
@keyframes quan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-icon {
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  border: 3px solid transparent;
  border-top-color: $theme-color;
  border-left-color: $theme-color;
  border-bottom-color: $theme-color;
  border-radius: 50%;
  animation: quan .8s infinite linear
}
</style>
