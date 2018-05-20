<template>
  <div class="waybill" v-if="status">
  <head-menu></head-menu>
    <div class="topdiv">
      <i class="el-icon-document"></i>
      <span>运单号：{{ billid }}</span><br>
      <i class="el-icon-edit-outline"></i>
      <span>运单状态：{{ status }}</span>
      <img src="../../assets/express4.gif" alt="expressgif" class="expressgif">
    </div>
    <el-steps :active="active" align-center direction="vertical">
      <el-step v-for="item in billArr" :key="item.title" :title="item.title" :description="item.description"></el-step>
    </el-steps>
  <el-button type="primary" class="loginbtn" @click="login">登录获取更多功能</el-button>
  </div>
  <div v-else>
    <Not-found></Not-found>
  </div>
</template>

<script>
import HeadMenu from '../HeadMenu'
import NotFound from './NotFound'
export default {
  components: {
    NotFound,
    HeadMenu
  },
  data () {
    return {
      loding: true
    }
  },
  computed: {
    billid () {
      return this.$route.params.billId
    },
    billArr () {
      return this.$store.state.waybill.logisticsRecord
    },
    status () {
      return this.$store.state.waybill.waybillStatus
    },
    active () {
      return this.$store.state.waybill.logisticsRecord.length - 1
    }
  },
  mounted () {
    this.$store.dispatch({
      type: 'getWaybill',
      billid: this.$route.params.billId
    })
  },
  methods: {
    login () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.waybill {
  position: relative;
}
.topdiv {
  line-height: 1.5rem;
}
.expressgif {
  width: 100%;
}
.loginbtn {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
