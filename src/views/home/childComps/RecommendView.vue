<template>
  <div class="recommend">
    <div class="r-item" v-for="item in list" :key="item.id">
      <a :href="item.link">
        <img :src="item.img" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {
      list: [
        { id: 1, link: "", img: "", title: "推荐部分" },
        { id: 2, link: "", img: "", title: "推荐部分" },
        { id: 3, link: "", img: "", title: "推荐部分" },
        { id: 4, link: "", img: "", title: "推荐部分" },
      ],
    };
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0;
  border-bottom: 8px solid #ccc;
}
.r-item {
  text-align: center;
  flex: 1;
}
</style>