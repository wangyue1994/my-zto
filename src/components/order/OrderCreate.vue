<template>
  <div class="menu">
  <head-menu></head-menu>
  <div class="paddingdiv">
    <el-button class="notice"
      plain>
    </el-button>
    <el-input
       prefix-icon="el-icon-mobile-phone"
       placeholder="请输入手机号"
       maxlength="11"
       v-model="input1"
       clearable>
     </el-input>
     <el-input
       prefix-icon="el-icon-edit"
       suffix-icon="el-icon-message"
       placeholder="请输入手机验证码"
       maxlength="6"
       v-model="input2"
       clearable>
     </el-input>
     <p>
       <span>请选择省-市</span>
       <select-city></select-city>
       <i class="el-icon-location"></i>
     </p>
    <span>对小哥说</span>
    <el-select v-model="value1" placeholder="我有悄悄话要说" class="widthselect">
      <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      </el-option>
    </el-select>
    <div class="inlinediv">
      <p>物品类型</p>
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
      <p>预估重量</p>
      <el-input-number v-model="num1" @change="handleChange1" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <div class="inlinediv">
      <p>代收金额</p>
      <el-input v-model="input" placeholder="0元"></el-input>
    </div>
    <div class="inlinediv">
      <p>包裹件数</p>
      <el-input-number v-model="num2" @change="handleChange2" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    </div>
    <div class="footdiv">
      <el-checkbox v-model="checked">我已同意并接受</el-checkbox>
      <router-link to="/">《寄件承诺》</router-link>
      <p>预约时间：8:00—17:00，逾时次日服务</p>
      <el-button type="primary" class="floatbtn" @click="submitOrder">提交</el-button>
    </div>
  </div>
</template>

<script>
import HeadMenu from '../HeadMenu'
import SelectCity from './SelectCity'
export default {
  components: {
    HeadMenu,
    SelectCity
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
      value2: '',
      checked: false,
      input: ''
    }
  },
  methods: {
    handleChange1 (value) {
      console.log(value)
    },
    handleChange2 (value) {
      console.log(value)
    },
    submitOrder () {
      if (!this.checked) {
        this.$message.error('请先同意寄件承诺条款');
      } else {
        this.$router.push('/')
      }
    }
  },
  mounted () {
    this.$notify({
      title: '警告',
      message: '因国家邮政局的要求，寄件时请出示有效证件，谢谢配合！',
      type: 'warning'
    })
  }
}
</script>

<style scoped>
.inlinediv {
  display: inline-block;
  width: 48%;
}
.notice {
  display: none;
}
.footdiv {
  position: fixed;
  bottom: 0;
  padding: 1rem;
  width: 100%;
  background: #555;
  color: #fff;
}
.floatbtn {
  position: absolute;
  top: 1rem;
  left: 20rem;
}
.widthselect {
  width: 77%
}
.paddingdiv {
  padding: 1rem;
}
</style>
