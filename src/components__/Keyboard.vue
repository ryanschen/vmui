<template>
  <div ref="keyboardWrapper" class="wrapper">
    <div class="content-wrapper" v-show="!$slots.input">
      <span class="title">车牌号</span>
      <span class="province" @click="clickProvinceNameHandle">{{ provinceName }}</span>
      <div class="energy" :class="{'has-energy-text': hasEnergyText}">
        <span
          class="number"
          :data-content="placeholder"
          :class="{'blink-blur':keyBoardDisplay === 'none', 'hidden-placeholder':carNumber }"
          @click="showEnNumberBoard"
        >
          {{carNumber}}
        </span>
      </div>
      <img src="../assets/images/取消.png" alt="del" @click="cliackDeleteHandle" v-show="isShowDelIcon" class="icon-delete">
    </div>
    <transition name="ry-slide-bottom">
      <div class="province-wrapper" v-show="provinceDisplay === 'block'" @click="getProvince($event)">
        <p class="close-btn"><a @click="provinceDisplay = 'none'">关闭</a></p>
        <ul class="row-wrapper" v-for="(rowProvince, index) in provinceList" :key="index">
          <li v-for="province in rowProvince" :key="province">{{ province }}</li>
        </ul>
      </div>
    </transition>
    <transition name="ry-slide-bottom">
      <div class="en-num-wrapper" v-show="keyBoardDisplay === 'block'" @click="getContent($event)">
        <p class="close-btn"><a @click="closeEnNumKeyboard($event)">关闭</a></p>
        <ul class="row-key">
          <li v-for="(num, index) in keyboardList.number" :key="'num-' + index" :class="{ disabled: isNumKeyDisabled }">{{ num }}</li>
        </ul>
        <ul class="row-key">
          <li v-for="(num, index) in keyboardList.firstRow" :key="'firstRow-' + index">{{ num }}</li>
          <li :class="{ disabled: isEnKeyDisabled }">I</li>
          <li :class="{ disabled: isEnKeyDisabled }">O</li>
          <li>P</li>
        </ul>
        <ul class="row-key">
          <li v-for="(num, index) in keyboardList.secondRow" :key="'secondRow-' + index">{{ num }}</li>
        </ul>
        <ul class="row-key">
          <li class="uppercase disabled iconfont icon-xiangshang"></li>
          <li v-for="(num, index) in keyboardList.threeRow" :key="'threeRow-' + index">{{ num }}</li>
          <li class="del iconfont icon-keyboard-shanchu"></li>
        </ul>
      </div>
    </transition>
    <div class="keyboard-tip" v-if="isShowTip" :style="{'left': tipPosX, 'top': tipPosY}">{{ tipText }}</div>
  </div>
</template>

<script>
export default {
  name: 'car-keyboard',

  props: {
    provinceNameProp: {
      type: String,
      required: true
    },
    carNumberProp: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },

  mounted () {
    this.$nextTick(() => {
      document.addEventListener('click', this.closeAllKeyboard, false)
    })
  },

  data () {
    return {
      isShowTip: false,
      tipText: '',
      tipPosX: '0',
      tipPosY: '-100px',
      provinceName: this.provinceNameProp, // 省份
      provinceList: [
        ['京', '津', '冀', '晋', '蒙', '辽', '吉', '黑'],
        ['沪', '苏', '浙', '皖', '闽', '赣', '鲁', '豫'],
        ['鄂', '湘', '粤', '桂', '琼', '渝', '川', '贵'],
        ['云', '藏', '陕', '甘', '青', '宁', '新', '']
      ],
      keyboardList: {
        number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        firstRow: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U'],
        secondRow: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        threeRow: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      },
      isNumKeyDisabled: true, // 设置数字键盘是否含disabled样式属性
      isEnKeyDisabled: false, // 设置英文键盘是否含disabled样式属性
      provinceDisplay: 'none', // 设置省份键盘是否显示 的 display 属性
      keyBoardDisplay: 'none', // 设置数字英文键盘是否显示的 display 属性
      carNumber: this.carNumberProp, // 发证机关
      isShowDelIcon: false, // 是否显示删除图标
      hasEnergyText: false // 是否显示新能源文字提示
    }
  },

  methods: {
    getValue () {
      return this.provinceName + this.carNumber
    },
    closeAllKeyboard (event) {
      if (!this.$refs.hasOwnProperty('keyboardWrapper') || !this.$refs.keyboardWrapper) {
        return
      }
      const isContains = this.$refs.keyboardWrapper.contains(event.target)
      if (!isContains) {
        this.keyBoardDisplay !== 'none' && (this.keyBoardDisplay = 'none')
        this.provinceDisplay !== 'none' && (this.provinceDisplay = 'none')
      }
    },
    closeEnNumKeyboard (event) {
      this.keyBoardDisplay = 'none'
      event.stopPropagation()
    },
    cliackDeleteHandle () {
      this.carNumber = this.carNumber.slice(0, 1)
    },
    clickProvinceNameHandle () {
      this.showProvinceKeyBoard()
    },
    showProvinceKeyBoard () {
      this.provinceDisplay !== 'block' && (this.provinceDisplay = 'block')
      this.keyBoardDisplay !== 'none' && (this.keyBoardDisplay = 'none')
    },
    showEnNumberBoard () {
      this.keyBoardDisplay !== 'block' && (this.keyBoardDisplay = 'block')
      this.provinceDisplay !== 'none' && (this.provinceDisplay = 'none')
    },
    getProvince (event) {
      event.stopPropagation()
      const nodeName = event.target.nodeName.toLocaleLowerCase()
      if (nodeName === 'li') {
        this.provinceName = event.target.innerText
        this.carNumber = ''
        this.$emit('set-province', this.provinceName)
        this.showEnNumberBoard()
      }
    },
    getContent (event) {
      event.stopPropagation()
      const nodeName = event.target.nodeName.toLocaleLowerCase()
      const isDisabled = event.target.className.indexOf('disabled') !== -1
      const isDel = event.target.className.indexOf('del') !== -1
      if (isDel) {
        this.carNumber = this.carNumber.slice(0, -1)
        return
      }
      if (nodeName === 'li') {
        if (isDisabled) { return }

        const textContent = event.target.textContent
        const position = event.target.getBoundingClientRect()
        this.tipText = textContent
        this.tipPosX = (position.left < 10
          ? 12
          : (textContent === '0' || textContent === 'P' || textContent === 'L' ? (position.left - 8) : position.left)) - 10 + 'px'
        this.tipPosY = position.top - 56 + 'px'
        this.isShowTip = true
        window.setTimeout(() => {
          this.isShowTip = false
          this.tipText = ''
        }, 250)

        if (this.carNumber.length < 7) {
          this.carNumber = this.carNumber + event.target.innerText
        }
      }
      if (this.keyBoardDisplay === 'none') {
        this.showEnNumberBoard()
      }
    }
  },

  watch: {
    carNumber () {
      if (this.carNumber.length === 0) {
        !this.isNumKeyDisabled && (this.isNumKeyDisabled = true)
        this.isEnKeyDisabled && (this.isEnKeyDisabled = false)
        this.isShowDelIcon && (this.isShowDelIcon = false)
      }
      if (this.carNumber.length > 0) {
        this.isNumKeyDisabled && (this.isNumKeyDisabled = false)
        !this.isEnKeyDisabled && (this.isEnKeyDisabled = true)
        this.carNumber.length > 1 && !this.isShowDelIcon && (this.isShowDelIcon = true)
        this.carNumber.length === 1 && this.isShowDelIcon && (this.isShowDelIcon = false)
      }
      // this.carNumber 为 第2 到 第8位
      // 严格校验新能源车牌号码的约束规则：
      // 沪【第1位】  A【第2位】  D【第3位】  K【第4位】   1【第5位】   2【第6位】   3【第7位】   4【第8位】
      // 当第3位为D/F时，第4位可字母和数字，第5-8位必须纯数字；
      // 当第8位为D/F时，第3-7位必须纯数字；
      if (this.carNumber.length === 7 && (/[A-Z][DF][0-9A-Z]\d{4}/.test(this.carNumber) || /[A-Z]\d{5}[DF]/.test(this.carNumber))) {
        this.hasEnergyText = true
      } else {
        this.hasEnergyText && (this.hasEnergyText = false)
      }
    },
    provinceNameProp (newValue, oldValue) {
      // if (!oldValue && newValue) {
      //   this.showEnNumberBoard()
      //   this.$refs.inputWrapper.focus()
      // }
      this.provinceName = this.provinceNameProp
    }
  },

  beforeDestroy () {
    document.removeEventListener('click', this.closeAllKeyboard)
  }
}
</script>

<style lang="scss">
@import "../assets/icon/iconfont.scss";
@import "../assets/style/carKeyboard/index.scss";
</style>
