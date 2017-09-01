<template>
	<div id="order" class="page">
		<header>
			<i class="icon icon-fanhui"></i>
			订单
		</header>
		<order-none></order-none>
	</div>
</template>

<script>
	import OrderNone from '../components/order/OrderNone.vue';
	export default {
		components:{
			"order-none":OrderNone
		}
	}
</script>

<style>
	#order header{height: 44px;background: #0af; position: absolute;top: 0px; left: 0px;width: 100%; text-align: center; line-height: 44px;font-size: 20px; color: #fff;}
	#order header i{display: block;width: 44px; height: 44px; position: absolute; left: 0px; top: 0px; font-size: 20px;}
</style>