import Vue from 'vue';
import App from './App.vue';
import router from './router';
import  axios from 'axios'
Vue.prototype.http = axios
import './permission'
import * as filters from './filter/index'

// 开启debug模式
Vue.config.debug = true;
Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
