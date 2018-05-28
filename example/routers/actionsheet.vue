<template>
  <div>
    <button @click="isShowAction = !isShowAction">{{stateText}}</button>
    <sq-actionsheet
      v-model="isShowAction"
      :action-fun="action"
      :action-list="list"
    />
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      isShowAction: false,
      list: [
        {
          name: '身份证',
          value: 'sfz'
        },
        {
          name: '护照',
          value: 'hz'
        }
      ]
    }
  },

  computed: {
    stateText () {
      return this.isShowAction ? '显示' : '隐藏'
    }
  },

  methods: {
    action (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
