<template>
  <div class="index-wrap">
    <p class="index-title" @click="isShow = !isShow" :style="{'opacity': isShow ? '0.5' : '', 'borderBottom': !isShow ? '0' : ''}">{{ title }}</p>
    <div class="index-ul" v-show="isShow">
      <router-link class="index-item" :to="item.to" v-for="(item, index) in list" :key="index">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: String
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #000;
  text-decoration: none;
}
.index-wrap {
  background-color: #fff;
  box-shadow: 0px 4px 4px #e5e5e5;
  border-radius: 4px;
  .index-title {
    margin: 0;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid #d5d5d5;
  }
  .index-ul {
    margin: 0;
    list-style: none;
    padding: 0 20px;
    .index-item {
      display: block;
      border-bottom: 1px solid #ddd;
      line-height: 1.5;
      padding: 10px 0;
      &:last-child {
        border: 0;
        padding-bottom: 20px;
      }
    }
  }
  &~.index-wrap {
    margin-top: 16px;
  }
}
</style>
