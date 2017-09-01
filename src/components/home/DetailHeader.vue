<template>
	<div class="header clear">
		<nav class="nav-bar">
			<i class="icon icon-fanhui" @click="goBack()"></i>
			
		</nav>
		<div class="main clear">
			<img :src="headerData.image_path | imgFilter" alt="" />
			<div class="shop-header-content">
				<h3 class="title">{{headerData.name}}</h3>
				<p class="delivery">
					 <span class="item">商家配送</span>
					 <span class="item">{{headerData.order_lead_time}}分钟送达</span>
					 <span>{{headerData.piecewise_agent_fee.description}}</span>
					 <i class="icon icon-fanhui"> </i>
				</p>
				<p class="notice">
					<span>公告：</span>
					<span>欢迎光临，用餐高峰期请提前下单，谢谢。</span>
					
				</p>
			</div>
		</div>
		<div class="activity-wrap" @click="open()">
			<i class="font-icon" :style="{backgroundColor:'#'+ headerData.activities[0].icon_color }">{{headerData.activities[0].icon_name}}</i>
			<span>{{headerData.activities[0].description}}</span>
			<div>{{headerData.activities.length}}个活动</div>
		</div>
		<!--遮罩层-->
		<div class="active-list" ref="activeList">
			<h2 class="title">{{headerData.name}}</h2>
			<div class="starWrap">
				<div class="starMax clear">
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
				</div>
				<div class="strar" :style="{width: headerData.rating/5*100+'%'}" >
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
					<span class="icon">&#xe662;</span>
				</div>
			</div>
			<h3 class="privilege">优惠信息</h3>
			<ul class="active-data">
				<li v-for="item in headerData.activities">
					<i class="font-icon" :style="{background:'#'+item.icon_color}">{{item.icon_name}}</i>
					<span>{{item.description}}</span>
				</li>
			</ul>
			<h3 class="privilege notice">商家公告</h3>
			<p class="info">欢迎光临，用餐高峰期请提前下单，谢谢。</p>
			<div class="close" ref="close" @click="close()">
				X
			</div>
		</div>
	</div>
</template>

<script>
//	document.getElementsByClassName('close')[0].onclick=function(){
//		alert(11)
//	}
	export default{
		props:['headerData'],
		data(){
			return {
				
			}
		},
		methods:{
			goBack(){
				this.$router.back()
			},
			close(){
				this.$refs.activeList.style.display="none"	
			},
			open(){
				this.$refs.activeList.style.display="block"	
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
	.header {height: 118px; overflow: hidden; border-bottom: 1px solid #ddd;}
	.header .nav-bar{
		height: 35px;
		line-height: 27px;
		padding: 4px 10px;
		box-sizing: border-box;
	}
	.header .nav-bar i{display: block;height: 100%;width: 35px; font-size: 27px;text-align: center;}
	.header  .main img{width: 65px; height: 65px; border: 1px solid #000000; margin: 0 10px; float: left;}
	.header  .main .shop-header-content{height: 67px; overflow: hidden;width: 288px; float: right; padding-right: 10px; box-sizing: border-box; position: relative;}
	.header  .main .shop-header-content p{margin-top: 5px; font-weight: normal;} 
	.header  .main .shop-header-content .title{font-size: 14px; font-weight: 900;}
	.header  .main .shop-header-content .delivery{font-size: 12px;}
	.header  .main .shop-header-content .delivery>.item:after{content: "/";display: inline-block; margin:  0 5px;}
	.header  .main .shop-header-content i{display: block; float: right; height: 16px; width: 16px;}
	.header  .main .shop-header-content .notice{font-size: 12px;}
	.header .activity-wrap{ padding: 0 10px;box-sizing: border-box; font-size: 12px;}
	.header .activity-wrap .font-icon{display: inline-block;color: #fff;}
	.header .activity-wrap div{float: right; font-size: 12px;}
	/*遮罩层*/
	.header  .active-list{
		position: absolute;width: 100%;top: 0px;border-bottom: 0px;
		background: #262626;height: 100%; z-index: 100;
		box-sizing: border-box;padding-top: 44px;text-align: center;
		display: none;
	}
	.header  .active-list .title{font-size: 20px; color: #fff;}
	.header  .active-list .starWrap{width:100px; margin: 0 auto; font-size: 0px; position: relative;margin-top: 10px;height: 22px;}
	.header  .active-list .starWrap div{position: absolute;left: 0px;top: 0px;white-space: nowrap;}
	.header  .active-list .starWrap .starMax {color: #ddd;width: 100px;}
	.header  .active-list .starWrap .strar {color: #ffaa0c;width: 80%;overflow: hidden;}
	.header  .active-list .starWrap span{display: inline-block;font-size: 20px;}
	.header  .active-list .privilege{color: #fff;font-size: 14px; padding: 5px;width: 64px;margin: 0 auto; border-radius: 20px;border: 1px solid #ddd;}
	.header  .active-list .active-data{margin-top: 20px;color: #fff;font-size: 12px;}
	.header  .active-list .active-data .font-icon{display: inline-block;}
	.header  .active-list .active-data  li{width: 250px; margin: 0 auto;text-align: left;margin-top: 5px;}
	.header  .active-list .privilege.notice{margin:20px auto;}
	.header  .active-list .info{color: #fff;}
	.header  .active-list  .close {position: absolute; bottom: 30px;left: 150px; width: 45px; height: 45px; border: 1px solid #888; border-radius: 50%; text-align: center; line-height: 45px; color: #888;}
</style>