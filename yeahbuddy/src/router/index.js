import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'hello',
            component: resolve => require(['@/components/Hello'], resolve)
        },
        {
            path: '/loading',
            name: 'loading',
            component: resolve => require(['@/components/mobileLoading'], resolve)
        }
    ]
})
