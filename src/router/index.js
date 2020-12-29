import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/Index.vue';
import Teach from '@/views/teach/Index.vue';
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
      path: '/teach',
      name: 'Teach',
      component: Teach
    }
  ]
})
