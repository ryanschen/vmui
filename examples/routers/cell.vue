<template>
  <div class="cell-page">
    <sq-cellgroup title="交强险">
      <sq-cell title="交强险" is-link value="投保" @click="show"/>
      <sq-cell title="起保时间" is-link/>
    </sq-cellgroup>
    <sq-cellgroup title="商业险" label="添加更多" @click="addMore">
      <sq-cell title="交强险" is-link value="投保"/>
      <sq-cell title="起保时间" is-link/>
    </sq-cellgroup>
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
