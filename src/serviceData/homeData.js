//引入插件
import axios from 'axios'
//引入接口
import api from '../url-api'

//头部地址
function getAddressData (lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.addressApi}?longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
	    resolve(response.data.name)
	    
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//天气
function getWeather(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.weatherApi}?longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//热搜词
function getHot(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}

//banner轮播图
function getBanner(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.categoryApi}&longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
//	 		var arr=response.data[0].entries.map((item)=>{
//	 			console.log(item)
//	 		})
	    resolve(response.data[0].entries)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//搜索地址请求
function searchAssress(keyword,lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.searchAssressApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
		
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//数据列表
function getList(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.homeListApi}&longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
		   
		    var arr=response.data.map((item)=>{
		    	var obj={};
					obj.id=item.id;
					obj.imgPath=item.image_path;
					obj.name=item.name;
					obj.rating=item.rating;
					obj.width=Number(item.rating)/5*100+"%";
					obj.description=item.piecewise_agent_fee.description;//配送费
					obj.minimum=item.float_minimum_order_amount;//起送
					obj.distance=item.distance;//距离多远
					obj.order_lead_time=item.order_lead_time;//多久送达
					obj.activeNum=item.activities.length;//活动
					obj.isShow=false;
					var newArr=[]
					var newObj={}
					if(item.activities.length>2) {
						var arr1=item.activities.splice(0,2);
						newObj.arr1=arr1;
						newObj.arr2=item.activities;
					}else{
						newObj.arr1=item.activities;
					}
					newArr.push(newObj)
//					obj.activities=newArr;//活动
					var arr = newArr.map((item)=>{
						
						return item;
					})
					obj.activities=arr;//活动
					if (item.supports[0]!=undefined) {
						obj.supportsName=item.supports[0].icon_name;
					}
					return obj;
		    })
		     resolve(arr)
//		    console.log(arr)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}

//搜索商家推荐searchWordApi
function searchWord(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.searchWordApi}&longitude=${lg}&latitude=${lt}`)
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//商品搜索请求
function keyWrodSearch(lg,lt) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.keyWrodSearchApi}`)
	 	.then(function (response) {
		  
//		    console.log(response)
//		    console.log(response.data[0].restaurant_with_foods)
		    var arr=response.data[0].restaurant_with_foods.map((list)=>{
//		    	console.log(list.restaurant)
		    	var item =list.restaurant;
		    	var obj={};
		    	obj.id=item.id;
				obj.imgPath=item.image_path;
				obj.name=item.name;
				obj.rating=item.rating;
				obj.width=Number(item.rating)/5*100+"%";
				obj.description=item.piecewise_agent_fee.description;//配送费
				obj.minimum=item.float_minimum_order_amount;//起送
				obj.distance=item.distance;//距离多远
				obj.order_lead_time=item.order_lead_time;//多久送达
		    	if (item.supports[0]!=undefined) {//票、保
						obj.supportsName=item.supports[0].icon_name;
					}
		    	return obj;
		    })
		      resolve(arr)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}  
//商家详情头部数据请求 在List.vue组件触发
function datailh(id) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.detailhApi1}${id}${api.datailhApi2}`)
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
//商家详菜单列表部数据请求
function detailMenu(id) {
	return new Promise((resolve,reject)=>{
		axios.get(`${api.detailMenuApi}${id}`)
	 	.then(function (response) {
	    resolve(response.data)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}


//test
function test() {
	return new Promise((resolve,reject)=>{
		axios.get(api.testApi)
	 	.then(function (response) {
	    resolve(response)
	  	})
	  	.catch(function (error) {
	  	 console.log(error);
	 	 });
	})
}
export default {
	getAddressData,
	getWeather,
	getHot,
	getBanner,
	getList,
	searchAssress,
	searchWord,
	keyWrodSearch,
	datailh,
	detailMenu,
	test
}
//addressApi,
//	weatherApi,
//	imgHost,
//	hotWordsApi,
//	categoryApi,
//	homeListApi,
//	searchAssressApi,
//	searchWordApi,
//	keyWrodSearchApi,
//	detailhApi1,
//	datailhApi2
//detailMenuApi