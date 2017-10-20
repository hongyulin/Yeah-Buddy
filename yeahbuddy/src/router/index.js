import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
      // component: resolve => require(['@/views/date/date'], resolve)
    },
    {
      path: '/loading',
      name: 'loading',
      component: resolve => require(['@/components/loadingIcon'], resolve)
    },
    {
      path: '/getUserInfo',
      name: 'getInfo',
      component: resolve => require(['@/views/login/getUserInfo'], resolve)
    },
    {
      path: '/home/date',
      name: 'home',
      component: resolve => require(['@/components/layout'], resolve),
      children: [{
        path: '/home/date',
        name: 'date',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/date/date'], resolve)
      },
      {
        path: '/home/circle',
        name: 'circle',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/circle/circle'], resolve)
      },
      {
        path: '/home/mine',
        name: 'mine',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/mine/mine'], resolve)
      },
      {
        path: '/home/show',
        name: 'show',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/show/show'], resolve)
      }]
    }
  ]
})
