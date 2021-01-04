import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/Index.vue';
import Home from '@/views/home/Home.vue';
import Topic from '@/views/topic/Index.vue';
import Resource from '@/views/resource/Index.vue';
import My from '@/views/my/Index.vue';
import Collect from '@/views/my/Collect.vue';
import Info from '@/views/my/Info.vue';
import UpDown from '@/views/my/UpDown.vue';
import Teach from '@/views/teach/Index.vue';
import Education from '@/views/educationnews/Index.vue';
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
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: 'resource'
        },
        {
          path: 'resource',
          name: 'Resource',
          component: Resource
        },
        {
          path: 'teach',
          name: 'Teach',
          component: Teach
        },
        {
          path: 'topic',
          name: 'Topic',
          component: Topic
        },
        {
          path: 'education',
          name: 'Education',
          component: Education
        },
        {
          path: 'my',
          name: 'My',
          component: My,
          children: [
            {
              path: '/',
              redirect: 'info'
            },
            {
              path: 'collect',
              name: 'Collect',
              component: Collect,
            },
            {
              path: 'info',
              name: 'Info',
              component: Info,
            },
            {
              path: 'updown',
              name: 'UpDown',
              component: UpDown,
            },
          ]
        }
      ]
    },
  ]
})
