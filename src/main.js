import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import LazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'
// 安装toast插件
Vue.use(toast) // 会执行 toast.install 方法 会传递 Vue 构造函数

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

Vue.use(LazyLoad,{
  loading: require('assets/img/common/timg.gif')
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
