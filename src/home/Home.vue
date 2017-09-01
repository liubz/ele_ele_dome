<template>
	<div class="page" id="home">
		<div class="homescroll">
			<div class="wrap">
				<div class="refreshTop"></div>
				<home-header :address="address" :weather="weather" :hot="hot"></home-header>
				<home-banner :banner='banner'></home-banner>
				<h3 class="listTitle bottom1px">推荐商家</h3>
				<home-list :list='list' :contentScroll="contentScroll"></home-list>
				<ul>
					<li v-for="item in test">{{
						item.id
					}}</li>
				</ul>
			</div>
			
		</div>
<!--		子组件-->
		<!--<router-view></router-view>-->
		<!-- 子页面 -->
	<transition enter-active-class="slideInRight animated"
		leave-active-class="slideOutRight animated">
		<router-view></router-view>
	</transition>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	//头部模块
	import HomeHerder from '../components/home/HomeHerder.vue';
	//banner
	import HomeBanner from '../components/home/HomeBanner.vue';
	//列表
	import List from '../components/common/List.vue'
	import service from '../serviceData/homeData.js'
	import axios from 'axios'
	export default {
		data(){
			return {
				address:'',
				weather:{},
				hot:[],
				banner:[],
				list:[],
				contentScroll: null,
				test:[]
			}
		},
		components:{//组件
			"home-header":HomeHerder,
			"home-banner":HomeBanner,
			"home-list":List
		},
		methods:{
			requestData(){
				var lg = this.longitude;
				var lt = this.latitude;
				//在实例创建完成后 进行ajax请求地址
				service.getAddressData(lg,lt)
				.then((res)=>{
	
					this.address=res
				});
				//天气
				service.getWeather(lg,lt)
				.then((res)=>{
					this.weather=res;
				})
				//热搜词
				service.getHot(lg,lt)
				.then((res)=>{
	//				console.log(res)
					this.hot=res
				})
				//banner轮播图
				service.getBanner(lg,lt)
				.then((res)=>{
	//				console.log(res)
					this.banner=res;
				})
				//商家列表数据
				service.getList(lg,lt)
				.then((res)=>{
	//				console.log(res)
					this.list=res;
				});
				
				//test
				service.test()
				.then((res)=>{
					console.log(res)
					this.test=res.data
					console.log(1111111)
					console.log(this.test)
				});
				

			}
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			])
		},
		created(){
			this.requestData();
					//监听地址改变的事件
			this.$eventHandle.$on('get-address', (val)=>{
				console.log('home接收到了新地址'+val);
				this.address = val;
			})
			
			//监听经纬度变化
			this.$watch('longitude', this.requestData);
			this.$watch('latitude', this.requestData);
			
		},
		mounted(){
		//创建滚动视图
			this.contentScroll = new IScroll("#home .homescroll", {
				probeType: 3,
				scrollbars: true,
				fadeScrollbars:true
			});
			//监听滚动事件
			this.contentScroll.on('scrollStart', function(){
				console.log(this.contentScroll);
				this.refresh();
			})
			
		}
	}
</script>

<style>
	#home .homescroll{width: 100%;height: 100%; overflow: hidden;}
	.listTitle{width: 100%;height: 50px;line-height: 40px;border-top: 10px solid #eee;box-sizing: border-box;padding-left: 8px;}
</style>