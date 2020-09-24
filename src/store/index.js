import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    cs: '测试内容',
    imgLoad: -1, // 用于
    cartList:[], // 购物车列表
}


const store = new Vuex.Store({
    state,
    mutations:{
        setImgLoad(state, playload){
            state.imgLoad = playload
        },
        addCart(state, payload){
            // 判断是否添加相同的商品 相同数量加一
            let isSlike = state.cartList.find(item=>payload.id === item.id)
            if(isSlike){
                isSlike.count++ 
            }else{
                payload.count = 1
                state.cartList.push(payload)
            }
        }
    }
})


window.$store =  store

export default store