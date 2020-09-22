<template>
  <div class="goodsItem">
    <img :src="item.img" alt @load="imgLoad(item.id)" />
    <div>
      <div class="title">{{item.title}}</div>
      <span class="price">{{item.price}}</span>
      <span class="cfav">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data(){
    return{
      isload:0
    }
  },
  methods:{
    imgLoad(id){
      // this.$emit
      // 在home.vue组件调用方法


      // 使用vuex
      // this.isload += 1
      // this.$store.commit('setImgLoad', id)
      // 在home.vue监听变化

      // 事件总线
      // Vue.prototype.$bus = new Vue(); ---> 使用一个vue实例
      this.$bus.$emit('imgLoad') // 发射
      // this.$bus.$on('imgLoad',()=>{}) // 监听

    }
  }
};
</script>

<style scoped>
.goodsItem{
    width: 48%;
}
img{
    width: 100%;
}
</style>