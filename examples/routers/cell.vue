<template>
  <div class="cell-page">
    <sq-cell-group title="交强险">
      <sq-cell title="交强险" is-link value="投保" @click="show"></sq-cell>
      <sq-cell title="起保时间" is-link></sq-cell>
    </sq-cell-group>
    <sq-cell-group title="商业险" label="添加更多" @click="addMore">
      <sq-cell title="交强险" is-link value="投保"></sq-cell>
      <sq-cell title="起保时间" is-link></sq-cell>
    </sq-cell-group>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {
    show () {
      alert('投保')
    },
    addMore () {
      alert('添加更多')
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-page {
  height: 100vh;
  background-color: #eee;
}
</style>
