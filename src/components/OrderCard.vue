<template>
  <div>
    <div class="order-card">
      <div class="card-top">
        <span class="text">{{noText}}</span>
        <span class="number">{{ ecOrderNo }}</span>
        <span
          class="state"
          :class="statusClass"
        >{{ orderStatus | config('orderStatus') }}</span>
      </div>
      <div class="card-middle">
        <div class="left">
          <div class="plan">{{ productName }}</div>
          <div class="company">保险公司：{{ insurer | config('insuranceCompany') }}</div>
        </div>
        <div class="right">保费：&yen; {{ amount }}</div>
      </div>
      <div class="card-bottom">
        <a
          v-show="type !== 'policy'"
          class="btn"
          :class="{'to-pay': (orderStatus === 'TOBEPAID')}"
          @click="clickHandle(order)"
        >{{ buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-card',

  props: {
    noText: {
      type: String,
      default: '订单号'
    },
    order: {
      type: Object
    },
    ecOrderNo: { // 订单号
      type: String,
      default: ''
    },
    orderStatus: { // 订单状态
      type: String,
      default: ''
    },
    productName: { // 产品名称
      type: String,
      default: ''
    },
    insurer: { // 产品所属公司
      type: String,
      default: ''
    },
    paymentAmount: { // 金额
      type: [String, Number],
      default: 0
    },
    productNo: { // 产品编号
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'order'
    }
  },

  computed: {
    statusClass () {
      // QUOTE("QUOTE", "报价中"),
      // TOBEPAID("TOBEPAID", "待付款"),
      // CANCELLED("CANCELLED", "已取消"),
      // END("END", "已完成"),
      // REFUNDED("REFUNDED", "已退款");
      return [
        {
          'fail': this.orderStatus === 'CANCELLED',
          'paid': this.orderStatus === 'TOBEPAID'
        }
      ]
    },
    amount () {
      return Number(this.paymentAmount).toFixed(2)
    },
    buttonText () {
      return this.orderStatus === 'TOBEPAID' ? '去支付' : '查看订单'
    }
  },

  data () {
    return {
    }
  },

  methods: {
    clickHandle (order) {
      this.$emit('handle-click', order)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content {
  padding: 12px 10px 0;
}
.order-card {
  background-color:  #fff;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 10px;
  .card-top {
    color: #898989;
    margin-bottom: 32px;
    .text {
      margin-right: 12px;
      font-size: 13px;
    }
    .number {
      font-size: 13px;
    }
    .state {
      float:  right;
      color: #fc7c08;
      font-size: 15px;
    }
    .state.fail {
      color: #ff2500;
    }
    .state.paid {
      color: #898989;
    }
  }
  .card-middle {
    height: 70px;
    .left {
      float:  left;
      .plan {
        margin-bottom: 6px;
        font-size: 15px;
      }
      .company {
        color: #878787;
        font-size: 13px;
      }
    }
    .right {
      position: absolute;
      right: 14px;
      margin-top: 10px;
      font-size: 15px;
      margin-right: 4px;
    }
  }
  .card-bottom {
    text-align:  right;
    .btn {
      color: #898989;
      font-size: 15px;
    }
    .btn.to-pay {
      color: #0087ff;
    }
  }
}
</style>
