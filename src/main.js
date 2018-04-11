import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 开启debug模式
Vue.config.debug = true;
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
