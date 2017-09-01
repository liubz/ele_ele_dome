<template>
	<div id="discoverList">
		<section>
			<h3 class="title">美食推荐</h3>
			<p>你的口味，我都懂</p>
			<ul class="food-list clear">
				<li>
					<img src="https://fuss10.elemecdn.com/8/ef/9185010992df6d42da24f24ef7233jpeg.jpeg?imageMogr/format/webp/"/>
					<p class="food-name">野山椒牛肉</p>
					<p class="price">￥32.9</p>
				</li>
				<li>
					<img src="https://fuss10.elemecdn.com/8/ef/9185010992df6d42da24f24ef7233jpeg.jpeg?imageMogr/format/webp/"/>
					<p class="food-name">野山椒牛肉</p>
					<p class="price">￥32.9</p>
				</li>
				<li>
					<img src="https://fuss10.elemecdn.com/8/ef/9185010992df6d42da24f24ef7233jpeg.jpeg?imageMogr/format/webp/"/>
					<p class="food-name">野山椒牛肉</p>
					<p class="price">￥32.9</p>
				</li>
			</ul>
			<div class="more">
				<router-link to="/dis/mall">查看更多</router-link>
			</div>
		</section>
	</div>
</template>

<script>
</script>

<style>
	#discoverList section{border-bottom: 10px solid #ddd;}
	section .title{text-align: center;padding-top: 20px;font-size: 20px; font-weight: 900;}
	section>p{font-size: 12px; color: #999;text-align: center;padding-bottom: 10px;}
	section .food-list{padding: 12px 0 15px 15px;width: 100%;box-sizing: border-box;}
	section .food-list li{width: 111px;float: left; margin-right: 9px;}
	section .food-list li img{width: 111px;height: 111px;margin-bottom: 10px;}
	section .food-list li .food-name{margin-bottom: 6px;}
	section .food-list li .price{color: #ff5339;}
	section .more{text-align: center; color: #999;font-size: 14px;padding-bottom: 10px;}
</style>