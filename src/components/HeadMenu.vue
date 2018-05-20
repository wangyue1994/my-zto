<template>
  <div class="menu">
    <i class="el-icon-back"></i>
    <span @click="back">返回</span>
  </div>
</template>

<script>
export default {
  methods: {
	back () {
	  this.$router.go(-1)
	}
  }
}
</script>

<style scoped>
.menu {
  height: 2rem;
  line-height: 2rem;
  padding-left: 2rem;
  background: #409EFF;
  color: white;
}
</style>
