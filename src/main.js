import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import LazyLoad from 'vue-lazyload'

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
