<template>
  <div class="shop">
      店铺信息
  </div>
</template>

<script>
export default {
    props:{
        shop:{
            type: Object,
            default: ()=>({})
        }
    }
}
</script>

<style scoped>
.shop{
    height: 500px;
}
</style>