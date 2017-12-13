import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/Hello'
import test from '@/page/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
