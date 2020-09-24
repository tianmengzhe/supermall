<template>
  <div>
      <!-- 图片 -->
      <div class="imgList">
        <slot></slot>
      </div>  

      <!-- 点 -->
      <div class="dots"></div>
      
  </div>
</template>

<script>
export default {
  props:{
    dots:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.imgList{
  display: flex;
}
</style>