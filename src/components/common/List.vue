<template>
	<section class="listData">
		
		<section class="list clear" v-for="(item,b) in list || dataList" :data-id="item.id" @click.stop="detail(item.id)">
			<div class="imgWrap">
				<img :src="item.imgPath | imgFilter"/>
			</div>
			<div class="main">
				<h3 class="StoreName">{{item.name}}</h3>
				<span class="mark">
					{{item.supportsName}}
				</span>
				<div class="gradeWrap">
					<div class="starWrap">
						<div class="starMax">
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
						</div>
						<div class="strar" :style="{width: item.width}" >
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
							<span class="icon">&#xe662;</span>
						</div>
					</div>
					<p class="volume"><i>{{item.rating}}</i>月售1367单</p>
				</div>
				<!--配送-->
				<section class="deliveryWrap clear">
					<span class="cost">
						<i>{{item.minimum}}元起送</i>/
						<i>{{item.description}}</i>
					</span>
					<span class="distance">
						<i>{{item.distance}}m</i>/
						<i>{{item.order_lead_time}}分钟</i>
					</span>
				</section>
				<!--活动-->
				<section class="activity">
					<span class="actNum" @click.stop="activeShow(item)" v-if="item.activeNum>2">{{item.activeNum}}个活动<i></i></span>
					
					<ul class="activeRow" v-for="val in item.activities">
					
						<li v-for="list in val.arr1"><i :style="{backgroundColor:'#'+ list.icon_color }">{{list.icon_name}}</i>{{list.description}}</li>
						<li  v-if="item.isShow" v-for="list in val.arr2"><i :style="{backgroundColor:'#'+ list.icon_color }">{{list.icon_name}}</i>{{list.description}}</li>
					</ul>
					
				</section>
			</div>
		</section>
	</section>
</template>

<script>
	
	export default{
		props:["list","contentScroll"],
		data(){
			return{
				dataList:[],
			}
		},
		methods:{//活动显示隐藏
			activeShow(item){
				this.$parent.contentScroll.refresh();
//				console.log(item.isShow)
//				console.log(item)
				item.isShow = !item.isShow;
			},
			//点击发送ajax请求 获取商家详情
			detail(val){
				//获取id
				this.id=val;
				//点击跳转到详情页
				this.$router.push({ path: `/home/detail/id=${val}` })
				
			}
		},
		created(){
			this.$eventHandle.$on("search-list",(val)=>{
				this.dataList=val;
			})
		}

	}
</script>

<style>
	.listData{width: 100%;height: auto;}
	.listData .list{width: 100%;height: auto; border-bottom: 1px solid #ddd;}
	.list .imgWrap{ padding: 15px 10px; float: left;}
	.list .imgWrap img{width: 60px;height: 60px;}
	.list .main{width: 295px;float: left; height: auto; padding: 15px 10px 15px 0;box-sizing: border-box;position: relative;}
	.main .StoreName{font-size: 14px;font-weight: 900;}
	.main .mark{position: absolute;right: 0px;top: 0px;font-size: 12px; padding-top: 15px;padding-right: 15px;color: rgb(153, 153, 153);}
	.gradeWrap{width: 100%;margin-top: 5px; position: relative;}
	.gradeWrap .starWrap{width: 80px;font-size: 0;position: relative;height: 17px;}
	.gradeWrap .starWrap div{width: 80px;white-space: nowrap;position: absolute;left: 0;top: 0; overflow: hidden;}
	.gradeWrap .starWrap div span{width: 12px;}
	.gradeWrap .starWrap .starMax{color: #ddd;}
	.gradeWrap .starWrap .strar{color: #ffaa0c;width: 70px;}
	.gradeWrap .volume{position: absolute; left: 90px; top: 0px; font-size: 12px;}
	.gradeWrap .volume i{padding-right: 10px; color: #ff6000;}
	.list .deliveryWrap{margin-top: 8px; font-size: 12px;height: 16px;}
	.list .deliveryWrap .cost{float: left;}
	.list .deliveryWrap .distance{float: right;}
	.list .activity{font-size: 12px; margin-top: 10px; position: relative;}
	.list .activity li{margin-top: 5px; width: 100%; overflow: hidden; white-space: nowrap;text-overflow :  ellipsis; }
	.list .activity .actNum{position: absolute;right: 0;top: 0;}
	.list .activity .actNum i{display: inline-block;width: 0;height: 0;border-left: 3px solid transparent;border-right: 3px solid transparent;border-top: 8px solid #939393;margin: 0 3px;}
	.list .activity .activeRow li i{display: inline-block; margin-right: 5px; color: #fff;}
</style>