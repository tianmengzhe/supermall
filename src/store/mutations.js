import { ADD_COUNT, ADD_CART } from './const'
export default {
    setImgLoad(state, playload){
        state.imgLoad = playload
    },
    [ADD_CART](state, payload){  
        state.cartList.push(payload)
    },
    [ADD_COUNT](state, payload){
        payload.count++
       
    }
}