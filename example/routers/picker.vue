<template>
  <div>
    <button @click="isShow = !isShow">show</button>
    <picker
      :list="list"
      v-model="isShow"
      @confirm="confirm"
      @cancel="cancel"
      @on-change="onChange"
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
    onChange (item) {
      console.log('onChange:', item)
    },
    cancel (item) {
      console.log('cancel:', item)
    },
    confirm (item) {
      console.log('confirm:', item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
