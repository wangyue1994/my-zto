<template>
  <div class="menu">
    <div class="item" v-for="item in footItem" :key="item.text">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footItem: [
        { text: '关于中通' },
        { text: '招贤纳士' },
        { text: '产品服务' },
        { text: '中通优选' },
        { text: '投资者关系' },
        { text: '公众号' }
      ]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
.menu {
  position: relative;
  top: 4rem;
}
.item {
  width: 33.3%;
  display: inline-block;
  text-align: center;
  line-height: 2rem;
}
</style>
