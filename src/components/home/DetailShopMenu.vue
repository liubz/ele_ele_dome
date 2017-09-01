<template>
	<div class="menu">
		<div class="tab-bar">
			<span>
				<i>商家</i>
			</span>
			<span>
				<i>评价</i>
			</span>
		</div>
		
		<!--主要内容-->
		<div class="menuMain">
			<ul class="menu-category"  >
				<li  v-for="(item,key) in muneData"  @click="getScroll(key)">{{item.name}}</li>
			</ul>
			<!--列表--><!--列表--><!--列表-->
			<div class="menu-list-wrap" id="cateMenu" >
				<!--遍历数据-->
				<dl class="menu-list" v-for="val in muneData" >
					<dt class="titel">
						<p v-if="val.description"><strong>{{val.name}}</strong>
						<span>{{val.description}}</span></p>
						<p v-else><span>{{val.name}}</span></p>
					</dt>
					<!--遍历里面的每一项-->
					<dd class="menuitem clear" v-for="food in val.foods">
						<div class="foodImg">
							<img :src="food.image_path | imgFilter"/>
						</div>
						<div class="foodinfo">
							<h3>{{food.name}}</h3>
							<span class="fooddescription">
								{{food.description}}
							</span>
							<p class="foodsales">
								<span>{{food.tips}}</span>
								
							</p>
							<strong class="foodprice">
								{{food.specfoods[0].price}}
							</strong>
							<div class="cartbutton" @click="addCart($event,food.name,food.specfoods[0].price,food.specfoods[0].item_id)">+</div>
						</div>
					</dd>
				</dl>
			</div>
		</div>
		
		<footer class="cart">
			<div class="bottomNun iconfont icon-eleme" ref='num' @click="examine()">
				
			</div>
			<div class="num">
				<p >¥{{allNum}}</p>
				<p>配送费¥5</p>
			</div>
			<div class="carriage">
				20元起送
			</div>
			<div class="buyButtom" @click="accounts()">
				立即购买
			</div>
		</footer>
		<!--遮罩层--><!--遮罩层--><!--遮罩层--><!--遮罩层--><!--遮罩层--><!--遮罩层-->
		<div id="cartList" @click.stop="cartShade()">
			<div class="cartWrap">
				<header>
					<span class="title">购物车</span>
					<span>清空</span>
				</header>
				<div class="cartData-wrap">
					<ul class="cartData"> 
						<li v-for="(item,index) in cartList">
							<span class="food-name">{{item.name}}</span>
							<span class="price">{{item.price}}</span>
							<span class="compute">
								<a href="javascript:" class="minus" @click.stop="jian(index)">-</a>
								<span>{{item.num}}</span>
								<a href="javascript:" class="add" @click.stop="jia(index)">+</a>
							</span>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['muneData'],
		data(){
			return {
				selected:'',
				menuKey:0,
				allNum:0,//总价
				cartList:null
			}
		},
		mounted(){
			var buyButtom=document.getElementsByClassName("buyButtom")[0];
			var bottomNun=document.getElementsByClassName("bottomNun")[0];
			if (JSON.parse(localStorage.getItem('cart'))!=null) {
				var arr=JSON.parse(localStorage.getItem('cart'));
				this.cartList=arr;
				for (var i=0;i<arr.length;i++) {
					this.allNum+=arr[i].num*arr[i].price;
				};
				
				bottomNun.className="bottomNun iconfont icon-eleme active"
				
				buyButtom.style.display="block";
			}else{
				bottomNun.className="bottomNun iconfont icon-eleme";
				buyButtom.style.display="none";
			}
		},
		methods:{
			addCart(e,name,price,id){//点击加入购物车的动画
//				设置样式
				
				var bottomNun=document.getElementsByClassName("bottomNun")[0];
				bottomNun.className="bottomNun iconfont icon-eleme active"
//				bottomNun.style.color="#FFF"
				var buyButtom=document.getElementsByClassName("buyButtom")[0];
				buyButtom.style.display="block";
				
				
				
//				点击获取数据数据
				e.stop;
				e.cancelBubble = true;
				var obj={};
				obj.name=name;
				obj.price=price;
				obj.id=id;
				obj.num=1;
				var flag=false;
//				console.log(name,price,id)
				var cart = JSON.parse(localStorage.getItem('cart'));
//				console.log(cart);




				if (cart==null) {//如果localStorage为空就设置一个空数组并且
					var arr=[]
					arr.push(obj);
					localStorage.setItem('cart', JSON.stringify(arr));
				} else{//如果localStorage不为空
					for (var i=0;i<cart.length;i++) {
						if (cart[i].id==id) {
							cart[i].num++;
							flag=true;
							localStorage.setItem('cart', JSON.stringify(cart));
						}
					}
					if (flag!=true) {
						cart.push(obj)
						localStorage.setItem('cart', JSON.stringify(cart));
					}
				}
				var sum=0;
				if (JSON.parse(localStorage.getItem('cart'))!=null) {
					
					var arr=JSON.parse(localStorage.getItem('cart'));
					this.cartList=arr;
					for (var i=0;i<arr.length;i++) {
						sum+=arr[i].num*arr[i].price;
						
					}
				} 
				this.allNum=sum;
				//点击加入购物车的动画
				let x=e.clientX;
				let y=e.clientY;
				var difx=x-20;
				var dify=document.documentElement.clientHeight-y-20;
				let outer=document.createElement("div");
				outer.className="out";
				outer.style.top=(y-20)+"px";
                outer.style.left=(x)+"px";
				let inner=document.createElement("div");
				inner.className="cartbutton";
				inner.innerText="+"
				outer.appendChild(inner);
                document.body.appendChild(outer);
				var timer=setTimeout(function(){
					 outer.style.transform="translate(0,"+dify+"px)";
                     //里层
                         inner.style.transform = 'translate(-'+difx+'px,0) rotate(720deg)';
                         inner.style.zIndex='100'

                         clearTimeout(timer);
				});
				var deleteTimer=setTimeout(function(){
                    document.body.removeChild(outer);
                    clearTimeout(deleteTimer)
                },500);
			},
			getScroll(key){//点击事件跳转分类
				
				var list=document.querySelectorAll(".menu-list")
				
				var listbox=document.getElementById("cateMenu")
				var menu=document.querySelector(".menu-category")
				var menuLi=menu.children;
				this.menuKey=key;
				
				
				for(var i=0;i<menuLi.length;i++){
					if(key==i){
						menuLi[this.menuKey].className="white"
					}else{
						menuLi[i].className="";
					}
					
					
				}
				
				listbox.scrollTop=list[key].offsetTop;
			},
			jian(index){//减
				console.log(this.cartList[index].num)
				this.cartList[index].num--
				if (this.cartList[index].num<1) {
					this.cartList.splice(index, 1);
				}
				localStorage.setItem('cart', JSON.stringify(this.cartList));
			},
			jia(index){//加
				this.cartList[index].num++;
				localStorage.setItem('cart', JSON.stringify(this.cartList));
			},
			examine(){//点击显示购物车
				if (JSON.parse(localStorage.getItem('cart'))!=null) {
					document.getElementById("cartList").style.display="block"
				} 
//				document.getElementById("cartList").style.display="block"
				
			},
			cartShade(){
				document.getElementById("cartList").style.display="none"
			}
				
		},
		updated(){
			var menu=document.querySelector(".menu-category");//左侧菜单分类大盒子
			var menuLi=menu.children;//分类
			var listbox=document.getElementById("cateMenu");//菜单列表大盒子
			var list=document.querySelectorAll(".menu-list");//菜单中的每一项
			var that=this;
			
			var sum=0;
				if (JSON.parse(localStorage.getItem('cart'))!=null) {
					var arr=JSON.parse(localStorage.getItem('cart'));
					for (var i=0;i<arr.length;i++) {
						sum+=arr[i].num*arr[i].price;
						
					}
				} 
				this.allNum=sum;
			
			
			menuLi[0].className="white";
			listbox.addEventListener("scroll",function(){
				if(this.scrollTop>(list[that.menuKey].offsetTop+list[that.menuKey].clientHeight)){
					
					for(var j=0;j<menuLi.length;j++){
						menuLi[j].className=""														
					}
					that.menuKey++;
					menuLi[that.menuKey].className='white'
				}
				else if(this.scrollTop<list[that.menuKey].offsetTop){
					for(var j=0;j<menuLi.length;j++){
						menuLi[j].className=""														
					}
					that.menuKey--;
					menuLi[that.menuKey].className='white'
				}
					
				
				
			})
			
			
		}
	}
</script>

<style>
	.menu{position: absolute;left: 0px; top: 118px; bottom: 0px;width: 100%; background: #fff; z-index: 10;}
	.menu .tab-bar{width: 100%;height: 45px; border-bottom: 1px solid #ddd;}
	.menu .tab-bar span{ display: block; width: 50%;height: 45px;float: left;text-align: center;}
	.menu .tab-bar span i{ display: inline-block; width: 40px;  height: 25px; padding-top: 15px;}
	.menu .menuMain{position: absolute;bottom: 48px;top: 45px;width: 100%;}
	.menu .menuMain .menu-category{width: 85px; position: absolute; top: 0px;bottom: 0 ;overflow: auto; border-right: 1px solid #ddd;background: #f8f8f8;}
	.menu .menuMain .menu-category li{padding: 12px 8px;box-sizing: border-box;border-bottom: 1px solid #ededed;}
	.menu .menuMain  .menu-list-wrap{width: 290px;position: absolute; top: 0px;bottom: 0 ;overflow: auto; left: 85px; box-sizing: border-box;}
	.menu .menuMain  .menu-list-wrap .menu-list .titel{background: #f1f1f1;height: 32px;line-height: 32px; padding:0 10px; box-sizing: border-box;}
	.menu-list-wrap .menu-list .titel strong{font-size: 14px; font-weight: bold;}
	.menu-list-wrap .menu-list .titel span{font-size: 12px; color: #999;}
	.menu-list-wrap .menu-list .menuitem {padding: 15px 10px; box-sizing: border-box; position: relative;border-bottom: 1px solid #ddd;}
	.menu-list-wrap .menu-list .menuitem .foodImg{width: 52px;margin-right: 10px;float: left;}
	.menu-list-wrap .menu-list .menuitem .foodImg img{width: 52px; height: 52px;  }
	.menu-list-wrap .menu-list .menuitem .foodinfo{width: 202px; float: left;}
	.menu-list-wrap .menu-list .menuitem .foodinfo h3{font-size: 14px;font-weight: 900;}
	.menu-list-wrap .menu-list .menuitem .foodinfo .fooddescription{font-size: 12px;color: #999;margin:5px 0 ;}
	.menu-list-wrap .menu-list .menuitem .foodinfo .foodsales{font-size: 12px;color: #999;margin:5px 0 ;}
	.menu-list-wrap .menu-list .menuitem .foodinfo .foodprice{font-size: 20px;color: #f60;font-weight: 900;}
	.menu-list-wrap .menu-list .menuitem .foodinfo .foodprice:before{content:"￥"; font-size: 12px;color: #f60;}
	.menu-list-wrap .menu-list .menuitem .foodinfo .cartbutton{position: absolute;bottom: 15px;right: 10px;background: #3190e8; height: 20px;width: 20px;border-radius: 50%;color: #fff;text-align: center;line-height: 20px;}
/*购物车*/
.menu .cart{width: 100%;height: 48px;background-color: rgba(61,61,63,.9); position: absolute;bottom: 0px;left: 0px; z-index: 101;}
.menu .cart .bottomNun{width: 50px;height: 50px;box-sizing: border-box;border: 5px solid #444; border-radius: 50%;position: absolute;top: -15px; left: 20px; background-color: rgba(61,61,63,.9); text-align: center; line-height: 40px; font-size: 30px; color: #333; z-index: 101;}
.menu .cart .bottomNun.active{background: #3190e8; color: #fff;}
.menu .cart .num{width: 190px; height: 100%;position: absolute; left: 90px; padding: 5px 0px; box-sizing: border-box;}
.menu .cart .carriage{width: 105px;height: 100%; position: absolute;right: 0px;top: 0px;text-align: center;line-height: 48px;}
.menu .cart .buyButtom{width: 105px;height: 100%; position: absolute;right: 0px;top: 0px;text-align: center;line-height: 48px; background: #4cd964; color: #fff; display: none;}
.out{
 /*background: red;*/

    width: 25px;
    height:25px;

       bottom: 0;
        
    position: absolute;
    right: 5px;
    /*background: transparent;*/
   z-index: 100;
    transition: all .5s cubic-bezier(.98,-0.48,.83,.67) ;
}
.cartbutton{
	position: absolute;
  
    background: #3190e8;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 20px;
    transition: all .5s linear;
}
.white{
	background: #fff;
	position: relative;
}
.white:after{
	 content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: #3190e8;
}
/*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*//*遮罩层*/
#cartList{width: 100%;position: absolute; left: 0px; top: -119px;bottom: 48px;background: rgba(0,0,0,.4); z-index: 11;  display: none;}
	#cartList .cartWrap{background: #fff;position: absolute;left: 0px; bottom: 0px;width: 100%;top: 0px;
    overflow: auto;}
	#cartList header{display: block;width: 100%;height: 40px;border-bottom: 1px solid #ddd; background: #eceff1;} 
	#cartList header span{display: block;height: 100%;width: 50px; float: right;line-height: 40px;color: #666;}
	#cartList header .title{margin-left: 10px; text-align:center; float: left;font-size: 14px;}
	#cartList .cartData-wrap{width: 100%;}
	#cartList .cartData{width: 100%;}
	#cartList .cartData li{height: 55px;padding: 7px 12px 7px 0; margin-left: 12px; box-sizing: border-box;border-bottom: 1px solid #ddd; line-height: 39px;font-size: 0px; display: flex;}
	#cartList .cartData li .food-name{display: inline-block;width: 175px;font-size: 14px;height: 100%; overflow: hidden;white-space: nowrap;text-overflow : ellipsis }
	#cartList .cartData li .price{display: inline-block;width: 80px; text-align: right; color: #f60; font-size: 14px; font-weight: 900; line-height: 39px;}
	#cartList .cartData li .price:before{content: "￥";font-size: 12px;}
	#cartList .cartData li .compute{width: 95px;display: inline-block;font-size: 14px;text-align: right;}
	#cartList .cartData li .compute .minus{display: inline-block; width: 20px; height: 20px; box-sizing: border-box; border: 1px solid #3190e8; line-height: 20px;text-align: center;border-radius: 50%;}
	#cartList .cartData li .compute .add{display: inline-block; width: 20px; height: 20px; background: #3190e8; color: #fff;line-height: 20px;text-align: center;border-radius: 50%;}
	#cartList .cartData li .compute span{width: 18px; display: inline-block; text-align: center;}
</style>