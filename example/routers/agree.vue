<template>
  <div class="demo-page-wrap">
    <sq-agree v-model="isAgree">同意并阅读《保险须知》</sq-agree>
    <p>
      {{ isAgree }}
    </p>
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
