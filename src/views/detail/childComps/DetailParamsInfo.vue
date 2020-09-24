<template>
    <div class="params">
        DetailParamsInfo 商品参数
    </div>
</template>

<script>
export default {
    props:{
        goodsParams:{
            type:Object,
            default:()=>({})
        }
    }
}
</script>

<style scoped>
.params{
    height: 500px;
}
</style>