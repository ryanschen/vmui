<template>
  <div class="demo-page-wrap">
    <h4>普通无标题</h4>
    <sq-picker
      :list="list"
      @on-change="onChange"
    />

    <h4>有标题</h4>
    <sq-picker
      show-toolbar
      :list="list"
      @confirm="confirm"
      @cancel="cancel"
      @on-change="onChange"
    />
    
    <h4>异步请求loading</h4>
    <sq-picker
      :list="list"
      :loading="true"
    />

    <h4>搭配popup使用</h4>
    <sq-button type="primary" @click="isShow = !isShow">show</sq-button>
    <sq-popup v-model="isShow" position="bottom">
      <sq-picker
        show-toolbar
        :list="list"
        @confirm="confirm"
        @cancel="cancel"
        @on-change="onChange"
      />
    </sq-popup>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      list: ['北京', '上海', '广州', '深圳', '重庆', '杭州', '天津', '南京', '温州'],
      isShow: false
    }
  },

  methods: {
    onChange (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
    },
    cancel1 (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
    },
    confirm1 (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
    },
    cancel (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
      this.isShow = !this.isShow
    },
    confirm (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="css" scoped>
</style>
