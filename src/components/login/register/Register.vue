<template>
  <div class="login">
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="手机登录" name="first">
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
       </el-tab-pane>
       <el-tab-pane label="密码登录" name="second">
         <el-input
           prefix-icon="el-icon-service"
		   placeholder="请输入用户名"
		   maxlength="11"
		   v-model="input3"
		   clearable>
		 </el-input>
		 <el-input
           prefix-icon="el-icon-setting"
           suffix-icon="el-icon-view"
           type="password"
		   placeholder="请输入密码"
		   maxlength="11"
		   v-model="input4"
		   clearable>
		 </el-input>
  	   <span class="findpassword"><router-link to="/">找回密码</router-link></span>
       </el-tab-pane>
  	</el-tabs>
  	<div class="logindiv">
  	  <el-button type="primary" @click="login" class="loginbtn">登录</el-button>
  	  <span><router-link to="/">还不是中通会员？点此快速注册</router-link></span>
  	  <p>成为中通会员随时随地掌握最新的物流动态，享受签到送积分、礼品兑换等诸多会员权益</p>
  	</div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      };
    },
    methods: {
      handleClick (tab) {
        console.log(tab)
      },
      login () {
      	console.log(this)
      	if (this.activeName === 'first' && this.input1 === '' && this.input2 === '') {
      	  this.$message({
            message: '警告，手机号或验证码不能为空',
            type: 'warning'
          })
      	}else if (this.activeName === 'second' && this.input3 === '' && this.input4 === '') {
      	  this.$message({
            message: '警告，用户名或密码不能为空',
            type: 'warning'
          })
      	} else {
			this.$router.push('/')
      	}
      }
    }
  }
</script>

<style scoped>
.login {
  padding: 1rem;
}
.findpassword {
  float: right;
}
.logindiv {
  text-align: center;
}
.loginbtn {
  display: block;
  width: 100%;
  margin-top: 1rem;
}
</style>
