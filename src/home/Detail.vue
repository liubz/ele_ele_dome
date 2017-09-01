<template>
	<div id="detail">
		<div class="com-wrap">
			<detail-header :headerData='headerData'></detail-header>
			<shop-menu :muneData="muneData"></shop-menu>
			<detail-cart></detail-cart>
		</div>
	</div>
</template>

<script>
	//商家详情头部
	import DetailHeader from '../components/home/DetailHeader.vue'
	//商家详情商品列表
	import DetailShopMenu from '../components/home/DetailShopMenu.vue'
	//遮罩层购物车列表
	import DetailCart from '../components/home/DetailCart.vue'
	//ajax
	import service from '../serviceData/homeData.js'
	export default {
		data(){
			return {
				headerData:'',
				muneData:''
			}
		},
		components:{
			'detail-header':DetailHeader,
			'shop-menu':DetailShopMenu,
			"detail-cart":DetailCart
		},
		created(){
			console.log(this.$route.params.id )
			//头部数据请求
			service.datailh(this.$route.params.id)
			.then((res)=>{
//				console.log(res)
				this.headerData=res;
			})
			//菜单分类数据请求
			service.detailMenu(this.$route.params.id)
			.then((res)=>{
				console.log(res)
				this.muneData=res;
			})
		},
		
		
	}
</script>

<style>
	#detail{width: 100%;position: absolute;top: 0px; bottom: -50px; background: #fff;}
</style>