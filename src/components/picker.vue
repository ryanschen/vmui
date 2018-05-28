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
  z-index: 1000;
}
.content {
  z-index: 1001;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: #fff;
  .header {
    display: flex;
    min-height: 50px;
    line-height: 50px;
    :nth-child(1) {
      width: 80px;
      flex: 0 0 80px;
      color: dodgerblue;
      font-size: 16px;
    }
    :nth-child(2) {
      flex: 1;
    }
    :nth-child(3) {
      width: 80px;
      flex: 0 0 80px;
      color: dodgerblue;
      font-size: 16px;
    }
  }
  .body {
    height: 170px;
    line-height: 34px;
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
        background-size: 100% 68px;
        background-repeat: no-repeat;
        z-index: 1002;
      }
      .line {
        width: 100%;
        height: 34px;
        position: absolute;
        left: 0;
        top: 68px;
        z-index: 1003;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1001;
        .item {
          height: 34px;
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
</style>

<template>
  <div class="picker">
    <transition name="ry-fade">
      <div class="mask" v-show="value" @click="$_cancel"></div>
    </transition>
    <transition name="ry-slide-bottom">
      <div class="content" v-show="value">
        <div class="header bottom-line">
          <div @click="$_cancel">取消</div>
          <div>请{{index}}--{{currentValue}}</div>
          <div @click="$_confirm">确认</div>
        </div>
        <div class="body">
          <div class="wrapper" ref="wrapper">
            <div class="content" :style="{transform: `translate3d(0px, ${translateY}px, 0px)`, transition: `transform ${transitionTime}s`}">
              <div class="item" v-for="(item, index) in list" :key="index">{{ item }}</div>
            </div>
            <div class="item-mask"></div>
            <div class="line top-line bottom-line"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'picker',

  props: {
    value: {
      type: Boolean
    },
    list: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      temp: null, // 容器
      translateY: 68,
      transitionTime: 0,
      startY: 0, // 起始值
      moveY: 0, // 移动的距离
      saveY: 68, // 缓存偏移量
      index: 0, // 选中的下标
      maxY: 0, // 最大偏移距离
      minY: 0, // 最小偏移距离
      currentValue: null, // 当前选中的值
      rowHeight: 34, // 每行列的高度--为固定值
      offset: 2, // 列表初始偏移量--为固定值
      startTime: undefined,
      points: []
    }
  },

  methods: {
    $_cancel () {
      this.$emit('input', false)
      this.$emit('cancel', this.currentValue)
    },
    $_confirm () {
      this.$emit('input', false)
      this.$emit('confirm', this.currentValue)
    },
    $_setY (val) {
      this.saveY = this.translateY = val
    },
    $_setCurrentValue (val) {
      this.currentValue = val
    },
    $_start (event) {
      this.startY = event.changedTouches[0].pageY
      this.moveY = 0
      this.startTime = +new Date()

      event.stopPropagation()
      event.preventDefault()
    },
    $_move (event) {
      if (this.transitionTime) {
        this.transitionTime = 0
      }

      this.moveY = event.changedTouches[0].pageY - this.startY
      this.translateY = this.saveY + this.moveY

      this.startTime = +new Date()
      this.points.push({ time: this.startTime, y: event.changedTouches[0].pageY })
      if (this.points.length > 40) {
        this.points.shift()
      }

      event.stopPropagation()
      event.preventDefault()
    },
    $_stop (diff = 0) {
      // 缓存上次translateY的值
      this.saveY = this.translateY

      // 获得list 下标
      this.index = parseInt((this.offset * this.rowHeight - this.saveY - diff) / this.rowHeight)
      if (this.index < 0) {
        this.index = 0
      } else if (this.index >= this.list.length) {
        this.index = this.list.length - 1
      }

      // 当前位置与 标准情况下 下标距离值 进行对比， 不相同情况下，进行手动设置位置
      if (this.saveY !== ((this.offset - this.index) * this.rowHeight)) {
        this.transitionTime = 0.3
        // 向下拉 超过显示情况下
        if (this.saveY > 0 && this.saveY > this.offset * this.rowHeight) {
          this.$_setY(this.offset * this.rowHeight)
          this.$_setCurrentValue(this.list[0])
          // 向上拉 超过显示情况下
        } else if (this.saveY < 0 && this.saveY < this.minY) {
          this.$_setY(this.minY)
          this.$_setCurrentValue(this.list[this.list.length - 1])
        } else {
          this.$_setY((this.offset - this.index) * this.rowHeight)
          this.$_setCurrentValue(this.list[this.index])
        }
      }
    },
    $_end (event) {
      if (!this.startY) return

      const endY = event.changedTouches[0].pageY
      const endTime = +new Date()
      // 如果最后次move时间与end时间超过100ms，不添加惯性滑动
      if (endTime - this.startTime > 100) {
        this.$_stop()
      } else {
        if (Math.abs(endY - this.startY) > 10) {
          const endPos = this.points.length - 1
          let startPos = endPos
          for (let i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
            startPos = i
          }

          if (startPos !== endPos) {
            const ep = this.points[endPos]
            const sp = this.points[startPos]
            const t = ep.time - sp.time
            const s = ep.y - sp.y
            const v = s / t // 出手时的速度
            const diff = v * 150 // 滑行 150ms,这里直接影响“灵敏度”
            this.$_stop(diff)
          } else {
            this.$_stop()
          }
        } else {
          this.$_stop()
        }
      }

      event.stopPropagation()
      event.preventDefault()
    },
    init () {
      this.temp.addEventListener('touchstart', this.$_start, false)
      this.temp.addEventListener('touchmove', this.$_move, false)
      this.temp.addEventListener('touchend', this.$_end, false)
      this.maxY = (this.list.length + this.offset) * this.rowHeight
      this.minY = (this.offset - this.list.length + 1) * this.rowHeight
    }
  },

  watch: {
    list: {
      handler (val) {
        if (this.currentValue === null && val[0]) {
          this.currentValue = val[0]
        }
      },
      immediate: true
    },
    currentValue (val, oldVal) {
      if (val !== oldVal) {
        this.$emit('on-change', val)
      }
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.temp = this.$refs.wrapper
      this.init()
    })
  },

  beforeDestroy () {
    this.temp.removeEventListener('touchstart', this.$_start)
    this.temp.removeEventListener('touchmove', this.$_move)
    this.temp.removeEventListener('touchend', this.$_end)
  }
}
</script>
