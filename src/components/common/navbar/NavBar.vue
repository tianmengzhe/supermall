<template>
  <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot> </div>
  </div>
</template>

<script>
export default {
    name:"navbar",
}
</script>

<style scoped>
.navbar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 0px 3px 0px rgba(0, 0, 0, .2);
}

.left,.right{
    width: 60px;
}
.center{
    /* 左右有固定宽度 center自动占据剩余空间*/
    flex: 1;
}

</style>