<template>
  <div class="sq-malltabs-wrapper">
    <div class="sq-malltabs-header-wrapper">
      <div class="sq-malltabs-header" ref="tabHeaderWrapper">
        <div v-if="hasLine" class="sq-malltabs-header-line" :style="{'transform': tleft, 'width': lineWidth, 'display': lineDisplay}"></div>
        <div class="sq-malltabs-header-item" :class="{'sq-malltab-active': currentActive === tab.name}" @click="handleClick($event, index)" v-for="(tab, index) in tabList" :key="index">
          <p style="margin:0;height:50%;">{{ tab.label1 }}</p>
          <p style="margin:0;height:50%;">{{ tab.label2 }}</p>
        </div>
      </div>
    </div>
    <div class="sq-malltabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-malltabs',

  props: {
    hasLine: {
      type: Boolean,
      default: true
    },
    active: {
      type: [String, Number]
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      tleft: `translate(0, 0)`,
      tabList: [],
      currentActive: this.active,
      lineWidth: '0',
      lineDisplay: 'none'
    }
  },

  methods: {
    handleClick (event, index) {
      const navName = this.tabList[index].name
      if (navName === this.currentActive) { return }
      this.currentActive = navName
      if (this.hasLine) {
        const parentLeft = event.srcElement.parentElement.getBoundingClientRect().left
        const targetLeft = event.target.getBoundingClientRect().left
        this.tleft = `translate(${targetLeft - parentLeft}px, 0)`
      }
      this.$emit('click', navName)
    },
    getPane () {
      return this.$children.filter(item => item.$options.name === 'malltab-pane')
    },
    updateNav () {
      const children = this.getPane()
      if (children.length === this.tabList.length) { return }
      this.tabList = []
      children.forEach((pane, index) => {
        this.tabList.push({
          label1: pane.label1,
          label2: pane.label2,
          name: pane.name
        })
      })
      if (this.hasLine) {
        this.lineWidth = (100 / this.tabList.length) + '%'
      }
    }
  },
  mounted () {
    const currentActive = this.currentActive
    if (currentActive) {
      const length = this.tabList.length
      const width = this.$refs.tabHeaderWrapper.clientWidth
      this.tabList.forEach((item, index) => {
        if (currentActive === item.name) {
          this.tleft = `translate(${index * (width / length) + 'px'}, 0)`
          this.lineDisplay = 'block'
        }
      })
    }
  }
}
</script>
<style lang='scss'>
$theme-color: #009ce4;
.sq-malltabs-wrapper {

  .sq-malltabs-header-wrapper {
    position: relative;

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background: #c8c8c8;
      transform: scaleY(0.5);
    }
  }

  .sq-malltabs-header {
    box-sizing: border-box;
    display: flex;
    // position: absolute;
    top: 0;
    left: 0;
    right: 0;
    // height: 48px;
    // line-height: 36px;
    text-align: center;
    font-size: 12px;
    overflow:hidden;
    color: #333;
    background-color:#fff;

    .sq-malltabs-header-line {
      z-index: 1;
      left: 0;
      bottom: 0;
      height: 2px;
      position: absolute;
      background-color: $theme-color;
      transition-duration: 0.2s;
    }
    .sq-malltabs-header-item {
      flex:1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 5px 0;
      color: #303030;
      font-size: 12px;

      &.sq-malltab-active {
        color: #ffffff;
        background-color: $theme-color;
      }
      
      p {
        line-height: 1.4em;
        font-size: 12px;
      }
    }
  }
}
</style>
