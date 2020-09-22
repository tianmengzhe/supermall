import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cs: '测试内容',
    imgLoad: -1, //用于
}


const store = new Vuex.Store({
    state,
    mutations:{
        setImgLoad(state, playload){
            state.imgLoad = playload
        }
    }
})


window.$store =  store

export default store