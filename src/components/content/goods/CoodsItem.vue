<template>
  <div class="goodsItem">
    <img :src="item.img" alt />
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