// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import data from './data/mock'

/*双击事件*/
/*import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}*/
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
