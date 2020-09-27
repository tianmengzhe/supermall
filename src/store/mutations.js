import { ADD_COUNT, ADD_CART, UP_CHECKED,UP_CHECKED_ALL_TRUE } from './const'
export default {
    setImgLoad(state, playload){
        state.imgLoad = playload
    },
    [ADD_CART](state, payload){  
        state.cartList.push(payload)
    },
    [ADD_COUNT](state, payload){
        payload.count++
       
    },
    [UP_CHECKED](stata, payload){ // 修改选中状态
        let obj = stata.cartList.find(item=>item.id===payload)
        obj.checked = !obj.checked
    },
    [UP_CHECKED_ALL_TRUE](stata, payload){ //全选
        stata.cartList.forEach(item =>item.checked = payload)
    }
}