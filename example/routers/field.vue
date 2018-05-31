<template>
  <div class="demo-page-wrap">
    <sq-fieldgroup>
      <sq-field placeholder="请输入姓名" v-model="name" arrow></sq-field>
      <sq-field label="姓名" placeholder="请输入姓名" v-model="name" arrow></sq-field>
      <sq-field label="姓名" placeholder="请输入姓名" v-model="name"></sq-field>
    </sq-fieldgroup>
    <sq-field placeholder="请输入姓名" v-model="name" arrow></sq-field>
    <sq-field label="姓名" placeholder="请输入姓名" v-model="name" arrow></sq-field>
    <sq-field label="姓名" placeholder="请输入姓名" v-model="name"></sq-field>
    <sq-field label="姓名" placeholder="请输入姓名" v-model="name"></sq-field>
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
