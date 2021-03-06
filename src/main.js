require('swiper/dist/css/swiper.css');
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
// 接口没有写的时候用于测试的假数据
// import data from './data/mock';
import vueAwesomeSwiper from 'vue-awesome-swiper';
import commonFn from './views/common/common';
import infiniteScroll from 'vue-infinite-scroll';


/*双击事件*/
/*import FastClick from 'fastclick'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}*/
//没有写完
Vue.use(vueAwesomeSwiper);
Vue.use(commonFn);
Vue.use(infiniteScroll);
Vue.config.productionTip = false;
// 注册全局函数
// Vue.prototype.whichShowFn = function(name) {
    // this.whichShow = name;
    // 解决keep-alive中多组件记录同一个滚动位置问题
    // document.documentElement.scrollTop = 0;
// }
// router.beforeEach((to, from, next) => {
// 	if (to.mached.length == 0) {
// 		next('/mobile/404');
// 	} else {
// 		next()
// 	}
// })
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
