<template>
  <div class="demo-page-wrap">
    <sq-radio-group
      v-model="radioValue"
      @change="change"
    >
      <sq-radio-item name="pg">苹果</sq-radio-item>
      <sq-radio-item name="xj">香蕉</sq-radio-item>
      <sq-radio-item name="hmg">哈密瓜</sq-radio-item>
    </sq-radio-group>
    <p>{{ radioValue }}</p>
    <p>
      <sq-button type="primary" @click="radioValue = 'pg'">苹果</sq-button>
    </p>
    <p>
      <sq-button type="primary" @click="radioValue = 'xj'">香蕉</sq-button>
    </p>
    <p>
      <sq-button type="primary" @click="radioValue = 'hmg'">哈密瓜</sq-button>
    </p>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      radioValue: 'hmg'
    }
  },

  methods: {
    change (name) {
      this.$toast.text(`当前选中的值为${name}`, 2000)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
