<template>
  <div class="recommend">
      DetailRecommend 推荐部分

      <goods-list :goods="recommend" />    
  </div>
</template>

<script>
import GoodsList from "components/content/goods/CoodsList";
export default {
  components:{GoodsList},
  props:{
    recommend:{
      type: Array,
      default:()=>[
        {
          id: 1,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 2,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 3,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 4,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 5,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 6,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 11,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 12,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 13,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 14,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 15,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 16,
          img: require("assets/img/221307-15784063870d2e.jpg"),
          title: "大范甘迪发-流行",
          price: "118.00",
          cfav: 10,
        },
      ]
    }
  }
}
</script>

<style scoped>
.recommend{
  height: 300px;
}
</style>