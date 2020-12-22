import axios from 'axios'
import router from '../router'

import { Indicator } from 'mint-ui';
// http request 拦截器
var qs = require('qs');
// 请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method == 'post' && config.data.constructor !== FormData) {
      config.data = qs.stringify(config.data);
    }
    // 加载动画
    Indicator.open();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    Indicator.close();
    return response;
  },
  error => {
    // 错误提醒
    Indicator.close();
    return Promise.reject(error);
  }
);
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next()
})
export default axios