<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="bar"><div slot="center">购物车({{length}})</div></nav-bar>

    <scroll ref="cardScroll" class="cardScroll" >
    <!-- 商品列表 -->
    <cart-list />
    </scroll>

    <!-- 底部汇总 -->
    <car-bottom-bar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

import CartList from "views/card/childComps/CartList";
import CarBottomBar from "views/card/childComps/CarBottomBar";

import { mapGetters } from 'vuex'
export default {
  name:'card',
  components:{
    Scroll,
    NavBar,
    CartList,
    CarBottomBar
  },
  data(){
    return{

    }
  },
  computed:{
    // ...mapGetters(['carlength','carlist']), // 或者
     ...mapGetters({
       list:'carlist',
       length:'carlength'
     }),

    // list(){
    //   return this.$store.state.cartList
    // }
  },
  activated(){ // 进入路由
    this.$refs.cardScroll.refresh() //进行刷新 重新计算滚动高度
  },
  mounted(){
    console.log(this.$refs.cardScroll.bScroll)
  },
  methods:{
    
  }
}
</script>

<style scoped>
.cardScroll{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 79px;
  left: 0;
  right: 0;
}
.bar{
  background-color: var(--color-tint); 
  color: white;
}
</style>