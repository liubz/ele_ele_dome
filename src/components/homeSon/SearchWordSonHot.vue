<template>
	<section class="hotWord-wrap">
			<h3 class="header">热门搜索</h3>
			<section class="hotWord">
				<span v-for="wrod in hot" @click="keyWrodSearch(wrod)">{{wrod.search_word}}</span>
				
			</section>
		</section>
</template>
	
<script>
import service from '../../serviceData/homeData.js';
	export default{
		data(){
			return {
				hot:[]
			}
		},
		mounted(){
			this.$eventHandle.$on("search-keyword",(val)=>{
//				console.log(val)
				this.hot=val;
//				console.log(this.hot)
			})
		},
		methods:{
			keyWrodSearch(wrod){
				//点击把搜索词赋值到input 传到SearchWord.vue 
				this.$eventHandle.$emit("inputWrod",wrod.search_word);
//				this.$router.go('/home/searchWord/list')
				this.$router.push({ path: '/home/searchWord/list' })
				service.keyWrodSearch(wrod)
				.then((res)=>{
					console.log(res)
					this.list=res;
					this.$eventHandle.$emit("search-list",this.list)
				})
			}
				
			
		
		}
	}
</script>

<style>
</style>