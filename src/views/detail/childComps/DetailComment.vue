<template>
  <div class="comment">
      评论部分
  </div>
</template>

<script>
export default {
  props:{
    info:{
      type: Object,
      default:()=>({})
    }
  }
}
</script>

<style scoped>
.comment{
  height: 300px;
}
</style>