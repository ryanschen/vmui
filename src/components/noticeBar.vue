<template>
  <div class="sq-notice-bar">
    <div class="sq-notice-bar-icon"></div>
    <div class="sq-notice-bar-content" ref="content">
      <div
        ref="wrap"
        class="sq-notice-bar-text"
        :data-text="text"
        :style="styles"
        :class="[animationClass]"
        @animationstart="onAnimationStart"
        @webkitAnimationStart="onAnimationStart"
        @animationiteration="onAnimationIteration"
        @webkitAnimationIteration="onAnimationIteration"
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
    }
  },

  computed: {
    styles () {
      return {
        paddingLeft: this.firstRound ? 0 : this.contentWidth + 'px',
        animationDelay: '1s',
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
    onAnimationStart () {
      console.log('startttt')
      this.firstRound = false
    },
    onAnimationIteration () {
      console.log('onAnimationIteration')
    },
    onAnimationEnd () {
      this.firstRound = false
      console.log(333)
      this.$nextTick(() => {
        console.log(22)
        this.animationDuration = (this.contentWidth + this.offsetWidth) / 50
        this.animationClass = 'sq-notice-bar-move-infinite'
      })
    }
  },

  watch: {
    text: {
      handler () {
        this.$nextTick(() => {
          if (!this.$refs.content || !this.$refs.wrap) return

          const contentWidth = this.$refs.content.getBoundingClientRect().width
          const offsetWidth = this.$refs.wrap.getBoundingClientRect().width
          console.log(offsetWidth > contentWidth)
          if (offsetWidth > contentWidth) {
            this.contentWidth = contentWidth
            this.offsetWidth = offsetWidth
            this.animationDuration = offsetWidth / 50
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
    // &::after {
    //   content: attr(data-text);
    //   display: inline-block;
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   transform: translateX(200%);
    //   background-color: yellow;
    // }
  }
  &-move {
    animation: move linear both;
  }
  &-move-infinite {
    animation: move-infinite linear infinite both;
  }
}
</style>
