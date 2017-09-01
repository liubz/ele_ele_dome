<template>
	<div class="homeHeader">
		<div class="top">
			<div class="address-wrap">
				<router-link to='/home/ads'>
					<i class="iconfont icon-order"></i>
					<span class="address">{{address}}</span>
				</router-link>
			</div>
			<div class="weather">
				<span class="temperature">{{weather.temperature}}°</span>
				<img class="hash" :src="weather.image_hash | imgFilter"/>
				<span class="description">{{weather.description}}</span>
			</div>
		</div>
		<router-link to='/home/searchWord/swsh'>
			<div class="search">
				搜索商家、商品
			</div>
		</router-link>
		<div class="hotword">
			<span v-for="(item,index) in hot" @click="searchFood()">{{item.word}}</span>
		</div>
	</div>
</template>

<script>
	
	export default {
//		props:{
//			address:Array,
//			weather:Object,
//			hot:Array
//		}
		props:['address','weather','hot'],
		methods:{
			searchFood(){
				this.$router.push({ path: '/home/searchWord/list' })
			}
			
		}
		
	}
</script>

<style>
	.homeHeader{
		width: 100%;
		height: 122px;
		box-sizing: border-box;
		padding: 10px 14px 10px 10px;
		background: #0085ff;
	}
	.homeHeader .top{
		height: 35px;
		line-height: 35px;
	}
	.homeHeader .top .address-wrap{float: left;color: #fff; width: 220px; overflow: hidden; height: 35px;}
	.homeHeader .top .address-wrap a{color: #fff;}
	.homeHeader .top .address-wrap i{display: inline-block;font-size: 20px;}
	.homeHeader .top .address-wrap .address{position: relative;display: inline-block;padding: 0 5px;font-size: 20px;}
	.homeHeader .top .address-wrap .address:after{
		content: '';
		position: absolute;
		right: -14px;
		top: 15px;
		width: 0;
	    height: 0;
	    border-left: 3px solid transparent;
	    border-right: 3px solid transparent;
	    border-top: 6px solid #fff;
	}
	.homeHeader .top .weather{float: right; color: #fff;white-space:nowrap; height: 35px;width: 100px;text-align: right;position: relative;}
	.homeHeader .top .weather span{position: absolute;}
	.homeHeader .top .weather .temperature{top: -10px;right: 30px;	}
	.homeHeader .top .weather .hash{width: 30px;height: 30px;display: inline-block;right: 0px;}
	.homeHeader .top .weather .description{right: 33px;top: 5px;}
	.homeHeader .search{width: 100%;height: 36px;margin: 5px 0;background: #fff;border-radius: 36px;text-align: center;line-height: 36px;color: #666;}
	.homeHeader .hotword{white-space:nowrap; color: #fff;overflow: auto;overflow:-Scroll;overflow-y:hidden}
	.homeHeader .hotword::-webkit-scrollbar{display:none}
	.homeHeader .hotword span{padding: 0 5px; }
</style>