<style lang="scss" scoped>
.swiper-wrap {
  overflow: hidden;
  position: relative;
  user-select: none;
  .wrap {
    width: 1500px;
    // transition: transform .5s;
    // transform: translateX(0);
    .item {
      width: 375px;
      height: 200px;
      display: inline-block;
      &:nth-child(1) {
        background-color: red;
      }
      &:nth-child(2) {
        background-color: yellow;
      }
      &:nth-child(3) {
        background-color: blue;
      }
      &:nth-child(4) {
        background-color: green;
      }
    }
  }
}
</style>

<template>
  <div class="swiper-wrap">
    <div
      class="wrap"
      ref="wrap"
      :style="{
        'transform': `translateX(${translateX}px)`,
        'transition': `transform ${speedX}ms`
      }"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="item"
        :style="{
          'transform': (index === 0 && currentIndex === 4) ? `translateX(${firstWrap}px)` : '',
          'transition': `transform ${firstSpeedX}ms`
        }"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      list: [
        1, 2, 3, 4
      ],
      currentIndex: 0,
      offsetWidth: 375,
      translateX: 0,
      speedX: 300,
      count: 0,
      speedTime: 2000,
      firstWrap: 0,
      firstSpeedX: 300
    }
  },

  methods: {
    autoPlay () {
      const {
        // autoPlay,
        speedTime,
        offsetWidth,
        count
      } = this

      this.timer = setInterval(() => {
        if (this.currentIndex === count - 1) {
          this.firstSpeedX = 0
          this.firstWrap = offsetWidth * count
        }

        if (this.currentIndex === count) {
          this.currentIndex = 0

          this.firstSpeedX = 0
          this.firstWrap = 0

          this.speedX = 0
          this.translateX = 0

          setTimeout(() => {
            this.speedX = 300
            this.translateX = -offsetWidth * ++this.currentIndex
          }, 100)
          return
        }

        if (this.speedX === 0) {
          this.speedX = 300
        }
        this.translateX = -offsetWidth * ++this.currentIndex
      }, speedTime)
    }
  },

  mounted () {
    this.offsetWidth = this.$el.offsetWidth
    this.count = this.list.length

    this.autoPlay()
  }
}
</script>
