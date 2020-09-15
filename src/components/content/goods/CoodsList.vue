<template>
  <div class="goods">
      <goods-item v-for="item in goods" :key="item.id" :item="item" />
  </div>
</template>

<script>
import GoodsItem from './CoodsItem'
export default {
    components:{
        GoodsItem
    },
    props:{
        goods:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>