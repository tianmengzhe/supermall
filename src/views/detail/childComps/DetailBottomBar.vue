<template>
  <div class="bar">
      <div class="bar-left">
          <div>
              <i></i>
              <span>客服</span>
          </div>
          <div>
              <i></i>
              <span>店铺</span>
          </div>
          <div>
              <i></i>
              <span>收藏</span>
          </div>
      </div>
      <div class="bar-right">
          <div class="car" @click="joinCar">加入购物车</div>
          <div class="buy" @click="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        id:String
    },
    methods:{
        joinCar(){
            this.$store.dispatch('addCart',{id:this.id})
        },
        buy(){
            
        }
    }
}
</script>

<style scoped>
.bar,.bar>div{
    display: flex;
    text-align: center;
    font-size: 12px;
}
.bar div{
    flex: 1;
}
.bar-right{
    line-height: 49px;
}
.car{
    background-color: #e9e94c;
}
.buy{
    background-color: #f2788d;
    color: #fff;
}
</style>