<template>
  <transition name="sq-toast">
    <div class="sq-toast-wrapper" v-show="visible">
      <div class="sq-toast">
        <div class="sq-toast__mark"></div>
        <div class="sq-toast__content" :class="{'sq-toast__type':type === 'text', 'sq-toast__bottom': position === 'bottom'}">
          <i :class="classes"></i>
          <div class="sq-toast__text">{{ message }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'sq-toast',

  props: {
    type: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'success', 'error'].indexOf(value) > -1
      }
    },
    message: {
      type: [String, Number],
      default: ''
    },
    duration: {
      type: Number,
      default: 3000
    },
    position: {
      type: String,
      default: 'middle'
    }
  },

  computed: {
    classes () {
      return [
        // 'sq-toast__icon',
        {
          [`sq-toast__icon iconfont icon-checkmark`]: this.type === 'success',
          [`sq-toast__icon iconfont icon-error`]: this.type === 'error',
          [`sq-toast__icon iconfont sq-toast-icon-loading icon-loading`]: this.type === 'loading'
        }
      ]
    }
  },

  data () {
    return {
      visible: false
    }
  },

  methods: {}
}
</script>

<style lang="scss">
@keyframes ani-load-loop {
  0% {
      transform: rotate(0)
  }

  50% {
      transform: rotate(180deg)
  }

  to {
      transform: rotate(1turn)
  }
}

.sq-toast-icon-loading {
  animation: ani-load-loop 1s linear infinite;
}

.sq-toast-enter-active, .sq-toast-leave-active {
  transition: opacity .5s;
}
.sq-toast-enter, .sq-toast-leave-to{
  opacity: 0;
}
.sq-toast-wrapper {
  z-index: 11000;
}
.sq-toast__mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}
.sq-toast__content.sq-toast__type {
  max-width: initial;
  min-width: initial;
}
.sq-toast__content.sq-toast__bottom {
  top: initial;
  bottom: 100px;
}
.sq-toast__content {
  z-index: 11000;
  max-width: 140px;
  min-width: 120px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  color: #fff;
  font-size: 15px;
  line-height: 1.2;
  border-radius: 5px;
  word-break: break-all;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  box-sizing: border-box;
  transform: translate3d(-50%, -50%, 0);
  background-color: rgba(0, 0, 0, .7);
  padding: 12px;
  text-align: center;
}
.sq-toast__icon {
  font-size: 54px !important;
  margin-bottom: 14px;
}
</style>
