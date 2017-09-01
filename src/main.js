// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//ajax请求插件
import axios from 'axios'

//过滤器
import './filter'

//状态管理
import store from './store'

//Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


//import store from './store'
//把ajax设置为Vue的原型
Vue.prototype.$http = axios;
Vue.config.productionTip = false

//处理非父子组件的通信
var Event = new Vue();
Vue.prototype.$eventHandle = Event;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
