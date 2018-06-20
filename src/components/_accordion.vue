<template>
  <div>
    <div
      class="accordion-wrapper"
      :class="{active: item.active}"
      v-for="(item, index) in data"
      :key="index"
      @click="item.hasDescribe && (item.active = !item.active)"
    >
      <div class="product-wrapper">
        <div class="left">
          <div class="product">
            <div>{{item.product}}</div>
            <div class="arrow" v-if="item.hasDescribe"></div>
          </div>
        </div>
        <span class="right">{{item.price}}</span>
      </div>
      <div class="accordion-cont" v-show="item.active">{{item.describe}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sq-accordion',

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>
<style lang='scss'>
.accordion-wrapper {
  padding: 5px 0;

  .left, .right {
    color: #303030;
    font-size: 15px;
    line-height: 1.5em;
  }

  .product-wrapper {
    display: flex;
    line-height: 1.5em;
    color: #303030;
  }

  .left {
    flex: 1;

    .product {
      display: flex;
      align-items: center;
    }

    .arrow {
      display: flex;
      align-items: center;
      margin: -2px 0 0 5px;

      &:after {
        content: "";
        display: inline-block;
        width: 8px;
        height: 8px;
        border-right: 1px solid #646464;
        border-bottom: 1px solid #646464;
        transform: rotate(45deg);
        transition: transform .15s ease-out;
      }
    }
  }

  .right {
    margin-left: 10px;
  }

  .accordion-cont {
    font-size: 12px;
    padding-left: 10px;
    line-height: 1.5em;
    margin-top: 5px;
    color: #303030;

    p {
      line-height: 1.5em;
    }
  }

  &.active {
    
    .left {

      .arrow {
        display: flex;
        align-items: center;
        margin: 6px 0 0 5px;

        &:after {
          transform: rotate(-135deg);
        }
      }
    }
  }
}
</style>
