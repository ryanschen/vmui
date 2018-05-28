<template>
  <div>
    <sq-agree v-model="isAgree">同意并阅读《保险须知》</sq-agree>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      isAgree: false
    }
  },

  methods: {}
}
</script>

<style lang="css" scoped>
</style>
