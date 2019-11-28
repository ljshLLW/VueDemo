// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 移动端click事件延迟300ms
import fastClick from 'fastclick'
// 多机型统一
import 'styles/reset.css'
// 1px边框问题
import 'styles/border.css'
// iconfont
import 'styles/iconfont.css'
// 轮播css
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})