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
import Courseware from '@/views/courseware/Index.vue';
import EduDeatail from '@/views/educationnews/Details.vue';
import CourseDeatail from '@/views/coursedetails/Index.vue';
import TopicDeatail from '@/views/topic/Details.vue';
import Search from '@/views/search/Index.vue';
import TeachDetails from '@/views/teach/Details.vue'
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
          path: 'search/:keyword',
          name: 'Search',
          component: Search,
        },
        {
          path: 'newdetails/:id',
          name: 'EduDeatail',
          component: EduDeatail,
        },
        {
          path: 'teachdetails/:id',
          name: 'TeachDetails',
          component: TeachDetails,
        },
        {
          path: 'topicdetails/:id',
          name: 'TopicDeatail',
          component: TopicDeatail,
        },
        {
          path: 'coursedetails/:id',
          name: 'CourseDeatail',
          component: CourseDeatail,
        },
        {
          path: 'resource',
          name: 'Resource',
          component: Resource
        },
        {
          path: 'courseware',
          name: 'Courseware',
          component: Courseware
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
          component: Education,
          
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
