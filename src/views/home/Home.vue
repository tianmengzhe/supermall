<template>
  <div class="home">
    <div class="home-nav">
      <nav-bar><div slot="center">购物街</div></nav-bar>
    </div>

    <!-- 滚动区域封装 -->
    <scroll ref="homeScroll" class="homeContent" :pull-up-load="true" :probe-type="3" @scroll='scroll' @pullingUp="loadMore">

      <!-- 轮播图 -->
      <home-swiper /> 
      <!-- 推荐 -->
      <recommend-view />
      <!-- 流行内容区域 -->
      <feature />
      <!-- 选项 -->
      <tab-control class="tab-control" :titles="titles" @typeClick="typeClick" />
      <!-- 商品列表 -->
      <goods-list :goods="list" />    

    </scroll>

    <!-- 回到顶部 -->
    <back-top @click.native="topClick" v-show="isTop" />
    <!-- 
      数据展示设计
      
    -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/CoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "views/home/childComps/HomeSwiper";
import RecommendView from "views/home/childComps/RecommendView";
import Feature from "views/home/childComps/Feature";

import { mapState } from 'vuex'
export default {
  name: "home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,

    Feature,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ["流行", "新款", "精选"],
      goods: {
        Pop: { page: 1, list: [] },
        New: { page: 1, list: [] },
        Sell: { page: 1, list: [] },
      },
      goodsType:'Pop',
      list: [], // 商品数据
      isTop:false
    };
  },
  created() {
    console.log('store:',window.$store.state.cs)
    // 发送请求 获取数据
    this.getPop();
    this.getNew();
    this.getSell();
    this.list = this.goods[this.goodsType].list;


    // 监听goodsItem 图片加载完成
    this.$bus.$on('imgLoad',()=>{
      this.scrollRefresh()
    })
  },
  mounted(){
    // this.$refs.homeScroll.scrollRefresh()
  },
  // computed:{
  //   isImgLoad(){
  //     console.log('img isImgLoad')
  //     return this.$store.state.imgLoad
  //   }
  // }, 
  watch:{
    '$store.state.imgLoad'(){
      this.scrollRefresh()
    }
  },
  methods: {
    /** 请求相关 */
    getPop() {
      // 获取流行数据
      let dat = [
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
      ];
      this.goods["Pop"].list.push(
        ...dat.map((item) => {
          item.id += Math.random();
          return item;
        })
      );
      this.goods["Pop"].page++;
    },
    getNew() {
      // 获取新款数据
      let dat = [
        {
          id: 972,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 981,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 991,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 956,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 919,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 918,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 971,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 982,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 992,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 910,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 914,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 912,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 970,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 980,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 990,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 913,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 911,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 915,
          img: require("assets/img/190334-154737741421ca.jpg"),
          title: "东风浩荡-新款",
          price: "118.00",
          cfav: 10,
        },
      ];
      this.goods["New"].list.push(
        ...dat.map((item) => {
          item.id += Math.random();
          return item;
        })
      );
      this.goods["New"].page++;
    },
    getSell() {
      // 获取精选数据
      let dat = [
        {
          id: 121,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 122,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 123,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 124,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 125,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 126,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 127,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 128,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 129,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 130,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 131,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 132,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 133,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 134,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 135,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 136,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 137,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
        {
          id: 138,
          img: require("assets/img/124035-1526272835360d.jpg"),
          title: "浮光动宫观-精选",
          price: "118.00",
          cfav: 10,
        },
      ];
      this.goods["Sell"].list.push(
        ...dat.map((item) => {
          item.id += Math.random();
          return item;
        })
      );
      this.goods["Sell"].page++;
    },

    /** 事件监听 */
    typeClick(type) {
      // 切换商品类型
      let arr = ["Pop", "New", "Sell"];
      this.goodsType = arr[type]
      this.list = this.goods[arr[type]].list;
    },
    scroll(pos){
      this.isTop = -pos.y > 340
    },
    loadMore(finishPullUp){ // 上拉加载更多
      console.log('上拉加载更多')
      this['get'+this.goodsType]()
      finishPullUp()
    },
    topClick(){ // 回到顶部
      this.$refs.homeScroll.scrollTo()
    },
    scrollRefresh(){
      this.$refs.homeScroll.refresh()
    }
  },
};
</script>

<style scoped>
/* vh 视口高度 */
.home {
  /* margin-top: 44px; 100vh*/
  height: 100vh;
   /* overflow: hidden; */
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

/* 实现吸顶效果 
    position: sticky;  当top值>= 44px 后 sticky会变成fixed效果
    top: 44px;
  */
.tab-control {
  background-color: white;
  position: sticky;
  top: 44px;
}

.homeContent{
  /* height: calc(100% - 93px) ;
  margin-top: 44px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>