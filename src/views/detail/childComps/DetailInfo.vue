<template>
  <div class="goods">商品信息</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        goods:{
            type: Object,
            default: ()=>({})
        }
    }
}
</script>

<style scoped>
.goods{
    height: 300px;
}
</style>