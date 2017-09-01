<template>
	<div class="dis-menu">
		<a href="" >
			<h2>积分商城</h2>
			<p>0元好物在这里</p>
			<img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="" />
		</a>
		<a href="" >
			<img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/" alt="" />
			<h2>美味爆料</h2>
			<p>无啤酒不夏天</p>
			
		</a>
		<a href="" >
			<img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/" alt="" />
			<h2>推荐有奖</h2>
			<p>5元现金拿不停</p>
			
		</a>
		
		
	</div>
</template>

<script>
	
</script>

<style>
	.dis-menu{
		width: 100%;
		height: 173px;
	}	
	.dis-menu a{
		padding: 24px 15px;
		box-sizing: border-box;
		border-right: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
	.dis-menu a:nth-of-type(1){
		height: 100%;
		display: block;
		width: 50%;
		
		float: left;
	}
	.dis-menu a img{
		display: block;
		height: 45px;
		float: right;
		
	}
	.dis-menu a:nth-of-type(1) img{
		display: block;
		height: 75px;
		
	}
			
	.dis-menu a:nth-of-type(2){
		height: 50%;
		display: block;
		width: 50%;
		
		float: right;
	}
	.dis-menu a:nth-of-type(3){
		height: 50%;
		display: block;
		width: 50%;
		float: right;
		
	}
	.dis-menu a h2{
		font-size: 18px;
	}
	.dis-menu a p{
		font-size: 12px;
		color: #999;
	}
	
</style>