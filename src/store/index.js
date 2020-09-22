import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cs:'测试内容'
}


const store = new Vuex.Store({
    state,
})
window.$store =  store

export default store