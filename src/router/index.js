import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
      // component: resolve => require(['@/views/autoplay'], resolve)
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
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/layout'], resolve),
      children: [{
        path: 'date',
        name: 'date',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/date/date'], resolve),
        children: [{
          path: 'near',
          name: 'near',
          component: resolve => require(['@/views/date/dateCircle'], resolve)
        },{
          path: 'classroom',
          name: 'classroom',
          component: resolve => require(['@/views/date/dateClassroom'], resolve)
        },{
          path: 'mall',
          name: 'mall',
          component: resolve => require(['@/views/date/dateMall'], resolve)
        }]
      },
      {
        path: 'circle',
        name: 'circle',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/circle/circle'], resolve),
        children: [{
          path: 'sportcir',
          name: 'sportcir',
          component: resolve => require(['@/views/circle/circleC'], resolve)
        },{
          path: 'trends',
          name: 'ctrends',
          component: resolve => require(['@/views/circle/circleTrends'], resolve)
        }]
      },
      {
        path: 'mine',
        name: 'mine',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/mine/mine'], resolve)
      },
      {
        path: 'show',
        name: 'show',
        meta: {keepAlive: true},
        component: resolve => require(['@/views/show/show'], resolve),
        children: [{
          path: 'boutique',
          name: 'boutique',
          component: resolve => require(['@/views/show/showBoutique'], resolve)
        },{
          path: 'state',
          name: 'state',
          component: resolve => require(['@/views/show/showTrends'], resolve)
        }]
      }]
    }
  ]
})
