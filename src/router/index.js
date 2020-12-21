import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/Index.vue';
import denglu from '@/views/login/Index.vue';
import zhuce from '@/views/login/Register.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'denglu',
      component: denglu
    }
  ]
})
