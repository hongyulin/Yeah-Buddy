// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
//iview和mt使用哪一个待选
import iview from 'iview'
import MintUI from 'mint-ui'
import 'iview/dist/styles/iview.css'
import 'mint-ui/lib/style.css'
Vue.use(iview)
Vue.use(MintUI)
import { Tosat } from 'mint-ui'

//没有写完

Vue.config.productionTip = false
/*router.beforeEach((to,from,next) => {
	if (to.mached.length == 0) {
		next('/mobile/404');
	} else {
		next()
	}
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
