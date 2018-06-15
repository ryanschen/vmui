<template>
  <div class="sq-notice-bar">
    <div class="sq-notice-bar-icon">
      <slot name="left-icon"></slot>
    </div>
    <div class="sq-notice-bar-content" ref="content">
      <div
        ref="wrap"
        class="sq-notice-bar-text"
        :data-text="text"
        :style="styles"
        :class="[animationClass]"
        @animationend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
      >
        <slot>{{ text }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-notice-bar',

  props: {
    text: {
      type: String
    },
    delay: {
      type: [Number, String],
      default: 1
    },
    deep: {
      type: Number,
      default: 50
    }
  },

  computed: {
    styles () {
      return {
        paddingLeft: this.firstRound ? 0 : this.contentWidth + 'px',
        animationDelay: this.delay + 's',
        animationDuration: this.animationDuration + 's'
      }
    }
  },

  data () {
    return {
      firstRound: true,
      animationDuration: 0,
      contentWidth: 0,
      offsetWidth: 0,
      animationClass: ''
    }
  },

  methods: {
    onAnimationEnd () {
      this.firstRound = false
      this.animationDuration = (this.contentWidth + this.offsetWidth) / this.deep
      this.animationClass = 'sq-notice-bar-move-infinite'
    }
  },

  watch: {
    text: {
      handler () {
        this.$nextTick(() => {
          const contentRef = this.$refs.content
          const wrapRef = this.$refs.wrap
          if (!contentRef || !wrapRef) return

          const contentWidth = contentRef.getBoundingClientRect().width
          const offsetWidth = wrapRef.getBoundingClientRect().width

          if (offsetWidth > contentWidth) {
            this.contentWidth = contentWidth
            this.offsetWidth = offsetWidth
            this.animationDuration = offsetWidth / this.deep
            this.animationClass = 'sq-notice-bar-move'
          }
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
@keyframes move {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes move-infinite {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
.sq-notice-bar {
  display: flex;
  height: 30px;
  background: #4a4c5b;
  line-height: 1.5;
  padding: 8px 15px;
  align-items: center;
  box-sizing: border-box;
  &-icon {
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    background-color: #fffefe;
    margin-right: 5px;
  }
  &-content {
    flex: 1;
    color: #fffefe;
    font-size: 12px;
    overflow: hidden;
  }
  &-text {
    position: relative;
    white-space: nowrap;
    display: inline-block;
  }
  &-move {
    animation: move linear both;
  }
  &-move-infinite {
    animation: move-infinite linear infinite both;
  }
}
</style>
