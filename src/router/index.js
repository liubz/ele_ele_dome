import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入模块
import Discover from "../discover/Discover.vue"
import PointsMall from '../discover/PointsMall.vue'


import Home from "../home/Home.vue"
//home的子组件
import Address from "../home/Address.vue"
import SearchWord from "../home/SearchWord.vue"
import Detail from "../home/Detail.vue"
//home下面SearchWord的子组件
import SearchWordSonHot from "../components/homeSon/SearchWordSonHot.vue"
import List from "../components/common/List.vue"


import Me from "../me/Me.vue"
import Login from "../me/Login.vue"


import Order from "../order/Order.vue"
export default new Router({
  routes: [
		{
		path:"/home",
		component:Home,
		children:[//字组件
			{
				path:"ads",
				component:Address
			},
			{//详情
				path:"detail/id=:id",
				component:Detail
			},
			{
				path:"searchWord",
				component:SearchWord,
					children:[//第二层子组件
						{
							path:"swsh",
							component:SearchWordSonHot
						},
						{
							path:"list",
							component:List
						}
					]
			}
		]
		},
		{//发现
		path:"/dis",
		component:Discover,
			children:[
				{
					path:"mall",
					component:PointsMall
				}
			]
		},
		{//我的
		path:"/me",
		component:Me,
			children:[
				{
					path:"login",
					component:Login
				}
			]
		},
		{//订单
		path:"/order",
		component:Order
		},
		{
			path:'*',
			redirect:'/home'
		},
		{
			path:'/',
			component:Home
		}
  ]
})
