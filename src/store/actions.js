import { ADD_COUNT, ADD_CART } from './const'
export default {
    addCart(context, payload){
        return new Promise((resolve, reject)=>{
            // 判断是否添加相同的商品 相同数量加一
            let isSlike = context.state.cartList.find(item=>payload.id === item.id)
            if(isSlike){ // 添加数量
                context.commit(ADD_COUNT,isSlike)
                resolve()
            }else{ // 添加商品
                context.commit(ADD_CART,{...payload,count:1})
                resolve()
            }
        })
        
    }
}