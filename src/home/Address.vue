<template>
	<div id="address">
		<div class="top">
			<h3 class="title"><i class="icon" @click="goBack()">&#xe60d;</i>选择地址</h3>
			<input type="text" class="word" placeholder="请输入地址" v-model="keyword">
		</div>
		<ul class="addressList">
				<!--{{addressList}}-->
			<li v-for="address in addressList" @click="addressSelected(address)">
			
				<h3>{{address.name}}</h3>
				<p>{{address.address}}</p>
			</li>
		</ul>
		
	</div>
</template>

<script>
	//请求
	import service from '../serviceData/homeData.js';
	
	
	import {mapState} from 'vuex'
	var timer=null;
	export default{
		data(){
			return {
				keyword:"",
				addressList:""
			}
		},
		computed: {
				...mapState([
					'longitude',
					'latitude'
				])
			},
		
		methods:{
			goBack(){
				this.$router.back();
			},
			addressSelected(info){
			console.log(info)
				//触发空实例的自定事件
				this.$eventHandle.$emit('get-address', info.name);
				//修改全局状态
				this.$store.dispatch('changeLocation', {
					lg: info.longitude,
					lt: info.latitude
				});
				this.$router.back();
			}
		},
		mounted(){
			this.$watch("keyword",(newVal,oldVal)=>{
				clearTimeout(timer);
				timer=setTimeout(()=>{
					console.log("发送请求");
					service.searchAssress(newVal,this.longitude, this.latitude)
					.then((res)=>{
//							console.log(res);
						this.addressList=res;
//							console.log(this.addressList);
					})
				},300)
			})
		}
	}


</script>

<style>
	#address {position: absolute;width: 100%; top: 0px;bottom: -50px;background: #fff; z-index: 10;}
	#address .top{width: 100%;height: 100px;background: #0af; padding-bottom: 12px;box-sizing: border-box;position: absolute;left: 0px;top: 0px;}
	#address .top .title{text-align: center;font-size: 20px; height: 44px;line-height: 44px; color: #fff;}
	#address .top .title i{position: absolute;height: 44px;width: 44px;left: 0px; font-size: 30px;} 
	#address .top  .word{width: 80%; margin:0 10%;height: 27px;border-radius: 27px; padding: 0 20px; box-sizing: border-box;}
	#address .addressList{width: 100%;position: absolute;top: 100px;bottom: 0px;left: 0px;overflow-y: auto;}
	#address .addressList li{margin-top: 10px; border-bottom: 1px solid #ddd;}
	#address .addressList li h3{ font-size: 14px;}
	#address .addressList li p{color: #999;font-size: 14px;}
</style>