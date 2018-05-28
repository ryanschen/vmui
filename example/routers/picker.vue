<template>
  <div>
    <button @click="isShow = !isShow">show</button>
    <picker
      :list="list"
      v-model="isShow"
      @confirm="confirm"
      @cancel="cancel"
      @on-change="onChange"
      :loading="true"
    />
  </div>
</template>

<script>
import picker from '@/components/picker'
export default {
  name: '',

  components: {
    picker
  },

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
    cancel (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
    },
    confirm (item, index) {
      this.$toast.text(`当前值为${item},index为${index}`)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
