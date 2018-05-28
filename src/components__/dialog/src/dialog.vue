<template>
  <transition name="sq-dialog">
    <div class="sq-dialog-wrapper" v-show="visible">
      <div class="sq-dialog">
        <div class="sq-dialog__mark" @click="handleClickOnMark"></div>
        <div class="sq-dialog__content">
          <div v-show="title" class="sq-dialog__title">{{ title }}</div>
          <div class="sq-dialog__text">
            {{ message }}
          </div>
          <div class="sq-dialog__footer">
            <div v-if="type=== 'confirm'" class="sq-dialog-cancel" @click="handleCancel">取消</div>
            <div class="sq-dialog-ok" @click="ok">确认</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'sq-dialog',

  props: {
    type: {
      type: String
      // ,
      // default: 'text',
      // validator (value) {
      //   return ['text', 'success', 'error'].indexOf(value) > -1
      // }
    },
    clickCloseMark: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '系统提示'
    },
    message: {
      type: String,
      default: ''
    },
    onOk: {
      type: null
    }
  },

  computed: {
    // classes () {
    //   return [
    //     'sq-dialog__icon',
    //     {
    //       [`icon-sqbx icon-shuruzhengque`]: this.type === 'success',
    //       [`icon-sqbx icon-cuowu`]: this.type === 'error'
    //     }
    //   ]
    // }
  },

  data () {
    return {
      visible: false
    }
  },

  methods: {
    handleClickOnMark () {
      this.clickCloseMark && (this.visible = false)
    },
    handleCancel () {
      this.visible = false
    },
    ok () {
      this.onOk()
    }
  }
}
</script>

<style lang="scss">
// @import './icon/iconfont';
.sq-dialog-enter-active, .sq-dialog-leave-active {
  transition: opacity .5s;
}
.sq-dialog-enter, .sq-dialog-leave-to{
  opacity: 0;
}

.sq-dialog__mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #000000, $alpha: .45);
  z-index: 998;
}
.sq-dialog__content {
  z-index: 999;
  width: 80%;
  min-width: 120px;
  position: fixed;
  top: 50%;
  left: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  color: #303133;
  font-size: 16px;
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
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  text-align: center;
}
.sq-dialog__title {
  height: 40px;
  line-height: 1.5;
  width: 100%;
  padding-top: 15px;
  box-sizing: border-box;
}
.sq-dialog__text {
  padding: 16px 20px 20px;
  width: 100%;
  box-sizing: border-box;
  line-height: 1.5;
}
.sq-dialog__footer {
  display:flex;
  width: 100%;
  font-size: 18px;
  align-items:  center;
  border-top: 1px solid #e5e5e5;
  justify-content:  center;
}
.sq-dialog-cancel {
  flex:1;
  padding: 12px 0;
  border-right:1px solid #e5e5e5;
  box-sizing:  border-box;
  color: #606265;
}
.sq-dialog-ok {
  flex:1;
  padding: 12px 0;
  box-sizing: border-box;
  height: 100%;
  color:#4a90e2;
}
</style>
