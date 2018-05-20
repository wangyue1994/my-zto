<template>
  <div class="menu">
  <head-menu></head-menu>
    <div class="inlinediv">
      <p>物品类型</p>
      <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="inlinediv">
      <p>预估重量</p>
      <el-input-number v-model="num1" @change="handleChange1" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <div class="inlinediv">
      <p>代收金额</p>
      <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="inlinediv">
      <p>包裹件数</p>
      <el-input-number v-model="num2" @change="handleChange2" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
  </div>
</template>

<script>
import HeadMenu from '../HeadMenu'
export default {
  components: {
    HeadMenu
  },
  data () {
    return {
      num1: 1,
      num2: 1,
      options1: [{
          value: '选项1',
          label: '请带纸箱'
        }, {
          value: '选项2',
          label: '需要爬楼'
        }, {
          value: '选项3',
          label: '缺文件袋'
        }, {
          value: '选项4',
          label: '来前电话'
        }, {
          value: '选项5',
          label: '请带面单'
        }, {
          value: '选项6',
          label: '请带胶带'
        }],
      value1: '',
      options2: [{
          value: '选项1',
          label: '文件'
        }, {
          value: '选项2',
          label: '数码产品'
        }, {
          value: '选项3',
          label: '生活用品'
        }, {
          value: '选项4',
          label: '服饰'
        }, {
          value: '选项5',
          label: '食品'
        }, {
          value: '选项6',
          label: '其他'
        }],
      value2: ''
    }
  },
  methods: {
    handleChange1 (value) {
      console.log(value)
    },
    handleChange2 (value) {
      console.log(value)
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
.inlinediv {
  display: inline-block;
}
</style>
