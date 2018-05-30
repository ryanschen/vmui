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
        'transition': `transform ${speed}s`
      }"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="item"
        :style="{
          'transform': (index === 0 && index2 === 4) ? `translateX(1500px)` : ''
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
      index2: 0,
      width: 375,
      translateX: 0,
      speed: 0.5
    }
  },

  methods: {},

  mounted () {
    setInterval(() => {
      if (this.index2 === 4) {
        this.index2 = 0
      }
      this.index2 = this.index2 + 1
      // if (this.index2 === 1) {
      //   this.speed = 0
      // } else {
      //   this.speed = 0.5
      // }
      this.translateX = -this.width * this.index2
    }, 2000)
  }
}
</script>
