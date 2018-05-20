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
        maxlength=12
        @select="handleSelect">
        <i
          class="el-icon-search el-input__icon"
          slot="suffix"
          @click="handleIconClick">
        </i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
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
    <foot-menu></foot-menu>
    <div class="media">
      <div class="mediaitem"><i class="el-icon-phone"></i>客服热线 95311</div>
      <div class="mediaitem"><i class="el-icon-download"></i>下载中通APP</div>
    </div>
    <footer class="footer">
      <img src="../assets/logo.png" alt="footerlogo" class="footerlogo">
      <p>中通快递 © 版权所有 沪ICP备13044869号</p>
    </footer>
  </div>
</template>

<script>
import ClickItem from './ClickItem.vue'
import NewsLoading from './NewsLoading.vue'
import FootMenu from './FootMenu.vue'

export default {
  components: {
    ClickItem,
    NewsLoading,
    FootMenu
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
        { value: '111111111111' },
        { value: '222222222222' },
        { value: '333333333333' }
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
        this.$router.push({name: 'Waybill', params: { billId: this.inputValue }})
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
.use_box {
  margin-left: 1rem;
}
.use_menu {
  text-indent: 2rem;
}
.media {
  background: #6086e7;
  position: relative;
  top: 5rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
}
.mediaitem {
  display: inline-block;
  width: 48%;
  color: #fff;
}
.footer {
  position: relative;
  top: 6rem;
  text-align: center;
}
.footerlogo {
  width: 6rem;
}
.footer>p {
  color: #d5d5d5;
}
</style>
