<template>
  <div>
    <sq-cellgroup>
      <sq-cell placeholder="请输入姓名" v-model="name" arrow></sq-cell>
      <sq-cell label="姓名" placeholder="请输入姓名" v-model="name" arrow></sq-cell>
      <sq-cell label="姓名" placeholder="请输入姓名" v-model="name"></sq-cell>
    </sq-cellgroup>
    <sq-cell placeholder="请输入姓名" v-model="name" arrow></sq-cell>
    <sq-cell label="姓名" placeholder="请输入姓名" v-model="name" arrow></sq-cell>
    <sq-cell label="姓名" placeholder="请输入姓名" v-model="name"></sq-cell>
    <sq-cell label="姓名" placeholder="请输入姓名" v-model="name"></sq-cell>
    {{name}}
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      name: ''
    }
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
