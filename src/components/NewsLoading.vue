<template>
  <div class="news">
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="新闻动态"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="">
      </el-table-column>
    </el-table>
    <div class="icon" @click="refresh">
      <i class="el-icon-refresh"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '05-17',
        address: '新华社：中国快递企业“科技范”越来越足丨锐评'
      }, {
        date: '05-11',
        address: '重磅！末端网点备案、诚信体系建设怎么干？国'
      }, {
        date: '05-09',
        address: '国家邮政局审议通过《快递暂行条例》三项配套'
      }],
      loading: true
    }
  },
  mounted () {
    this.$nextTick(function () {
      setInterval(this.timer, 2000)
    })
  },
  methods: {
    timer () {
      this.loading = false
    },
    refresh () {
      this.loading = true
    }
  }
}
</script>

<style scoped>
.news {
  position: relative;
  top: 3rem;
}
.icon {
  position: absolute;
  top: 1rem;
  left: 22rem;
}
</style>
