<template>
  <div>
    <header>
      <img src="../assets/logo.png" alt="logo" class="logo">
      <img src="../assets/menu_4_cur.png" alt="user" class="user" @click="login">
    </header>
    <div class="block">
      <el-carousel trigger="click" height="11rem">
        <el-carousel-item v-for="item in imgArr" :key="item.url">
          <img :src="item.url" style="max-width: 100%;height: auto;display: inline-block;">
        </el-carousel-item>
      </el-carousel>
        <el-autocomplete
        popper-class="my-autocomplete"
        v-model="inputValue"
        :fetch-suggestions="querySearch"
        placeholder="请输入12位中通运单号"
        @select="handleSelect">
        <i
          class="el-icon-search el-input__icon"
          slot="suffix"
          @click="handleIconClick">
        </i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
    </div>
    <click-item></click-item>
    <div class="use">
      <div class="use_box">
        <em>Hi,</em>
        <span class="not-logged">
          您还未
        </span>
        <router-link to="login">[登录]</router-link>
      </div>
      <div class="use_menu">快件管理、详情订阅、积分奖励…尽在中通会员</div>
    </div>
    <news-loading></news-loading>
    <footer>footer</footer>
  </div>
</template>

<script>
import ClickItem from './ClickItem.vue'
import NewsLoading from './NewsLoading.vue'
export default {
  components: {
    ClickItem,
    NewsLoading
  },
  data () {
    return {
      imgArr: [{url: require('../assets/img1.jpg')}, {url: require('../assets/img2.jpg')}],
      restaurants: [],
      inputValue: ''
    }
  },
  methods: {
    login () {
      this.$router.push({name: 'login'})
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
        { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' }
      ]
    },
    handleSelect () {
      console.log(this.inputValue)
    },
    handleIconClick () {
      if (this.inputValue === '') {
        this.$message.error('请输入运单号')
      } else if (this.inputValue.length !== 12) {
        this.$message.error('请输入12位正确格式运单号！')
      } else {
        console.log(this.inputValue)
      }
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>

<style scoped>
header {
  background: #f0f0f2;
  position: fixed;
  width: 100%;
  height: 2rem;
  z-index: 100;
}
.logo {
  width: 6rem;
  position: absolute;
  margin-top: .5rem;
  margin-left: 1rem;
}
.user {
  width: 1.5rem;
  position: absolute;
  top: .25rem;
  right: 1rem;
}
.block {
  position: relative;
  top: 2rem;
}
.el-autocomplete {
  width: 90%;
  z-index: 10;
  position: absolute;
  bottom: 1rem;
  left: 5%;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }
    .highlighted .addr {
      color: #ddd;
    }
  }
}
.use {
  position: relative;
  top: 3rem;
}
</style>
