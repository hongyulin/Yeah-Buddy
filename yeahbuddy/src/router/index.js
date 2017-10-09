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
            path: '/date',
            name: 'date',
            component: resolve => require(['@/components/layout'], resolve),
            children:  [{
                path: '/date',
                name: 'home',
                component: resolve => require(['@/views/date/date'], resolve)
            }]
        }
    ]
})
