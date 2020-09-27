<template>
    <div class="cart-list">
        <cart-item class="item" v-for="item in list" :key="item.id" :obj="item" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from 'views/card/childComps/CartItem'
export default {
    components:{CartItem},
    computed:{
    // ...mapGetters(['carlength','carlist']), // 或者
     ...mapGetters({list:'carlist'}),
    }
}
</script>

<style scoped>
.cart-list{
    height: 100%;
}
</style>