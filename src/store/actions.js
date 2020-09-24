import { ADD_COUNT, ADD_CART } from './const'
export default {
    addCart(context, payload){
        // 判断是否添加相同的商品 相同数量加一
        let isSlike = context.state.cartList.find(item=>payload.id === item.id)
        if(isSlike){
            context.commit(ADD_COUNT,isSlike)
        }else{
            context.commit(ADD_CART,{...payload,count:1})
        }
    }
}