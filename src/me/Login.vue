<template>
	<div id="login">
		<div class="loginHeader">
			<i class="icon icon-fanhui" @click="back()"></i>
			登录
		</div>
		<h3>账号密码登入</h3>
		<form>
			<input type="text"  placeholder="手机/邮箱/用户名" v-model="user" />
			<input type="password" placeholder="密码" v-model="passWrod" />
			<input class="button" type="button" value="登入" @click="login()">
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user:"",
				passWrod:'',
				status:1
			}
		},
		methods:{
			login(){
				this.status=0;
			},
			back(){
				this.$router.back()
			}
		}
	}
</script>

<style>
	#login {width: 100%;position: absolute;top: 0px; left: 0px; bottom: -50px;z-index: 10; background: #fff;}
	#login .loginHeader{height: 44px;background: #0af; width: 100%; text-align: center; line-height: 44px;font-size: 20px; color: #fff;}
	#login .loginHeader i{display: block;width: 44px; height: 44px; position: absolute; left: 0px; top: 0px; font-size: 20px;}
	#login h3{font-size: 20px; text-align: center;margin: 20px 0;}
	#login form{width: 100%;}
	#login form input{width: 80%;height: 48px; border: 1px solid #ddd; margin: 10px auto; display: block;box-sizing: border-box; padding-left: 15px; font-size: 14px;}
	#login form .button{width: 80%; display: block;height: 40px; text-align: center; line-height: 40px;font-size: 14px;margin: 30px auto;border: none; color: #fff;background: #00d762; border-radius: 5px;}
</style>