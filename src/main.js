import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/commons.css'
import './router/promission'
import axios from 'axios'
import store from '@/store/index'  //引入store/index

Vue.config.productionTip = false
Vue.prototype.$axios = axios    //在Vue的原型上添加axios对象。

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
