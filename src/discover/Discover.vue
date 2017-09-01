<template>
	<div>
		<div class="page" id="discover">
			<div class="header">
				<h1>发现</h1>
			</div>
			<v-menu></v-menu>
			<img-wrap></img-wrap>
			<discover-list></discover-list>
		</div>
		<transition enter-active-class="slideInRight animated"
			leave-active-class="slideOutRight animated">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import DiscoverMenu from "../components/discover/discover-menu.vue"
	import discoverList from "../components/discover/discoverList.vue"
	import imgWrap from "../components/discover/imgWrap.vue"
	
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"v-menu":DiscoverMenu,
			"discover-list":discoverList,
			"img-wrap":imgWrap
		}
	}
</script>

<style>
	#discover{overflow-y: auto;}
	.header{
		width: 100%;
		height:44px;
		background-image: linear-gradient(90deg,#0af,#0085ff);
		position: relative;
	}
		.header h1{
			font-size: 18px;
			line-height: 44px;
			display: block;
			height: 44px;
			color: #fff;
			position: absolute;
			left: 50%;
			top:0;
			transform: translateX(-50%);
			font-weight: 900;	
		}
</style>