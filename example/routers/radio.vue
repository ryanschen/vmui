<template>
  <div class="demo-page-wrap">
      <!-- v-model="radioValue" -->
    <sq-radiogroup
      v-model="radioValue"
    >
      <sq-radio name="1">苹果</sq-radio>
      <sq-radio name="2">香蕉</sq-radio>
      <sq-radio name="3">哈密瓜</sq-radio>
    </sq-radiogroup>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      radioValue: '3'
    }
  },

  methods: {
  },

  watch: {
    radioValue (val, oldVal) {
      console.log('val', val, oldVal)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
