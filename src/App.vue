<template>
  <div id="app">
    
    <router-view></router-view>
    <nav class="tab top1px">
    	<li v-for="(item,key) in tabList">
    		<router-link :to="item.link">
    			<i class="iconfont" :class="item.icon"></i>
    			<span>{{item.title}}</span>
    		</router-link>
    	</li>
    </nav>
  </div>
</template>

<script>
export default {
 data(){
 	return {
 		"tabList":[
 		{"title":"外卖",icon:"icon-eleme",link:'/home'},
 		{"title":"发现",icon:"icon-discover",link:"/dis"},
 		{"title":"订单",icon:"icon-order",link:"/order"},
 		{"title":"我的",icon:'icon-me',link:"/me"}
 	]
 	}
 }
}
</script>

<style>
	#app{width: 100%;height: 100%;}
	.tab{
		width: 100%;
		height: 49px;
		background: #fff;
		position: absolute;
		left: 0px;
		bottom: 0px;
		display: flex;
	}
	.tab li{
	flex: 1;
	display: flex;
	}
	.tab li a{flex:1;height: 100%; display: flex; flex-direction: column; align-items: center;align-content: center;justify-content: center; color: #333;}
		.tab li a.router-link-active{color: #0089dc;}
	.tab li a i{font-size: 24px;}
	.tab li a span{font-size: 12px;}
	/*page*/
	#app .page{width: 100%;position: absolute;top: 0px;left: 0px;bottom: 50px; }
</style>
