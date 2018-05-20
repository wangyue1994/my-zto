<template>
  <div class="clickitems">
  	  <div class="clickitem" v-for="item in itemArr" :key="item.url">
  	  	<router-link :to="item.to">
  	  	<img :src="item.url" class="menu-img">
  	  	<span class="text">{{ item.text }}</span>
  	  	<span class="detail">{{ item.detail }}</span>
  	  	</router-link>
  	  </div>
  </div>
</template>

<script>
export default {
  data () {
   return {
     itemArr: [
       { url: require('../assets/nav_1.png'), to: 'OrderCreate', text: '我要寄件', detail: '当天件&隔天件' },
       { url: require('../assets/nav_2.png'), to: 'login', text: '联系客服', detail: '一键拨打热线' },
       { url: require('../assets/nav_3.png'), to: 'login', text: '附近网点', detail: '查看附近的网点' },
       { url: require('../assets/nav_4.png'), to: 'login', text: '运费时效', detail: '提前知晓运费' }
     ]
   }
 }
}
</script>

<style scoped>
.clickitems {
  position: relative;
  top: 3rem;
  margin-left: 2rem;
  height: 8rem;
}
.clickitem {
  width: 50%;
  float: left;
  margin-bottom: 1rem;
}
.menu-img {
  width: 3rem;
  position: absolute;
}
.text {
  display: block;
  margin-left: 4rem;
}
.detail {
  display: block;
  margin-left: 4rem;
}
</style>
