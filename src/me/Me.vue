<template>
	<div class="page" id="me">
		<header class="header">
			我的
		</header>
		<div class="login-wrap clear">
			<router-link to="/me/login">
				<div class="user-avatar">
				
				</div>
				<div class="profile">
					<p class="login-entrance">登入/注册</p>
					<p>登录后享受更多特权</p>
				</div>
			</router-link>
			
		</div>
		<div class="combo">
			<div class="privilege">
				<i class="icon">&#xe662;</i>
				<p>优惠</p>
			</div>
			<div class="integral">
				<i class="icon">&#xe662;</i>
				<p>积分</p>
			</div>
		</div>
		
		<div class="profile-1reTe">
			<a href="">
				<i class="icon">&#xe662;</i>
				<div>
					我的订单
					<i class="icon">&#xe662;</i>
				</div>
			</a>
			<a href="">
				<i class="icon">&#xe662;</i>
				<div>
					积分商城
					<i class="icon">&#xe662;</i>
				</div>
			</a>
			<a href="">
				<i class="icon">&#xe662;</i>
				<div>
					饿了么会员卡
					<i class="icon">&#xe662;</i>
				</div>
			</a>
			<div style="width: 100%;height: 10px; background: #ddd;"></div>
			<a href="">
				<i class="icon">&#xe662;</i>
				<div>
					服务中心
					<i class="icon">&#xe662;</i>
				</div>
			</a>
			<a href="">
				<i class="icon">&#xe662;</i>
				<div>
					下载饿了么APP
					<i class="icon">&#xe662;</i>
				</div>
			</a>
		</div>
		<transition enter-active-class="slideInRight animated"
		leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
</script>

<style>
	#me .header{height: 44px;line-height: 44px; font-size: 20px;background: #0af;color: #fff;text-align: center;}
	#me .login-wrap{ background: #0af; color: #fff; padding: 25px 15px; box-sizing: border-box;}
	#me .login-wrap .user-avatar{height: 60px;width: 60px; background: #fff;border-radius: 50%; float: left;}
	#me .login-wrap a .profile {float: left; padding-left: 20px;}
	#me .login-wrap  a .profile .login-entrance{font-size: 26px;}
	#me .combo{display: flex;border-bottom: 10px solid #ddd; padding:10px 0px; box-sizing: border-box;}
	#me .combo .integral{border-left: 1px solid #ddd;}
	#me .combo div{flex: 1;; margin-left: -1px; text-align: center;}
	#me .combo div i{display: block; font-size: 25px;}
	#me .combo div p{font-size: 12px;}
	#me .profile-1reTe a{display: block; width: 100%;border-bottom: 1px solid #ddd; position: relative;height: 42px;}
	#me .profile-1reTe a>i{display: block;width: 42px;height: 42px;position: absolute; line-height: 42px;}
	#me .profile-1reTe a div{height: 42px;width: 318px;box-sizing: border-box;position: absolute; left: 42px; line-height: 42px;}
	#me .profile-1reTe a div i{display: block; float: right;}
</style>