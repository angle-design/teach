import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http/index.js';
import ElementUI from 'element-ui';
import  './assets/fonts/iconfont.css';
import 'babel-polyfill';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})





