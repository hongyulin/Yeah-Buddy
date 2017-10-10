import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: resolve => require(['@/views/login/login'], resolve)
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
            children:  [{
                path: '/home',
                name: 'date',
                component: resolve => require(['@/views/date/date'], resolve)
            },{
                path: '/home/circle',
                name: 'circle',
                component: resolve => require(['@/views/circleOfFriends/circle'], resolve)
            },{
                path: '/home/mine',
                name: 'mine',
                component: resolve => require(['@/views/mine/mine'], resolve)
            },{
                path: '/home/show',
                name: 'show',
                component: resolve => require(['@/views/show/show'], resolve)
            }]
        }
    ]
})
