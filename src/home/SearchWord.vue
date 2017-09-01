<template>
	<div id="search">
		<form class="keyWord-Wrap">
			<i class="icon" @click="goBack()">&#xe60d;</i>
			<input type="search" placeholder="请输入商家名称" v-model="keyWrod"/>
			<span>搜索</span>
		</form>
		 <router-view></router-view>
		<!--<section class="hotWord-wrap">
			<h3 class="header">热门搜索</h3>
			<section class="hotWord">
				<span v-for="wrod in hotWrod" @click="keyWrodSearch(wrod)">{{wrod.search_word}}</span>
			</section>
		</section>-->
		
		<!--<home-list :list='list'></home-list>-->
	</div>
</template>

<script>
	import service from '../serviceData/homeData.js';
	import {mapState, mapGetters} from 'vuex';
	//列表
	import List from '../components/common/List.vue'
	export default {
		data(){
			return {
				hotWrod:[],
				keyWrod:'',
				list:[]
			}
		},
		components:{//组件
			"home-list":List
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			]),
			...mapGetters([
				'count'
			])
		},
		methods:{
			goBack(){
				this.$router.back()
//				console.log(this)
			}
		
		},
		created(){
			service.searchWord(this.longitude,this.latitude,this.keyWrod)
			.then((res)=>{
				this.hotWrod=res;
				this.$eventHandle.$emit("search-keyword",this.hotWrod );
			});
			this.$eventHandle.$on('inputWrod',(val)=>{
//				console.log(val)
				this.keyWrod=val
			})
			this.$eventHandle.$on('search-list',(val)=>{
//				console.log(val)
				this.list=val
			})
			
			
		}
	}
</script>

<style>
	#search{width: 100%;position: absolute;left: 0px; top: 0px;bottom: -50px;background: #fff; z-index: 10;}
	#search .keyWord-Wrap{width: 100%;height: 56px; padding: 12px; box-sizing: border-box;}
	#search .keyWord-Wrap i{position: absolute; height: 56px;width: 56px; left: 0px;top: 0px;text-align: center; line-height: 56px;font-size: 30px;}
	#search .keyWord-Wrap input{width: 80%;margin: 0 10%;height: 100%; background: #ddd; border-radius: 32px; padding: 10px 30px; box-sizing: border-box;}
	#search .keyWord-Wrap span{display: block;width: 56px;height: 56px; position: absolute;top: 0px; right: 0px; text-align: center; line-height: 56px; }
	
	
	#search .hotWord-wrap{width: 100%;margin-top: 15px;padding: 12px;box-sizing: border-box;}
	#search .hotWord-wrap .header{height: 36px; line-height: 36px; color: #333; }
	#search .hotWord-wrap .hotWord span{display: inline-block;padding: 8px 10px;margin: 12px 12px 0 0; background: #f7f7f7; color: #666;}
</style>