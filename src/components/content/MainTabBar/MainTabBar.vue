<template>
  <tab-bar>
    <bar-item path="home" activeColor="#00a7ff">
      <img slot="icon" src="~assets/img/tabbar/index.png" alt="首页" />
      <img slot="active-icon" src="~assets/img/tabbar/index_act.png" alt="首页" />
      <div slot="text">首页</div>
    </bar-item>
    <bar-item path="category" activeColor="#00a7ff">
      <img slot="icon" src="~assets/img/tabbar/fl.png" alt="分类" />
      <img slot="active-icon" src="~assets/img/tabbar/fl_act.png" alt="分类" />
      <div slot="text">分类</div>
    </bar-item>
    <bar-item path="card">
      <img slot="icon" src="~assets/img/tabbar/gwc.png" alt="购物车" />
      <img slot="active-icon" src="~assets/img/tabbar/gwc_act.png" alt="购物车" />
      <div slot="text">购物车</div>
    </bar-item>
    <bar-item path="wd" >
      <img slot="icon" src="~assets/img/tabbar/wd.png" alt="我的" />
      <img slot="active-icon" src="~assets/img/tabbar/wd_act.png" alt="我的" />
      <div slot="text">我的</div>
    </bar-item>

    <!-- <bar-item v-for="({path,text,activeColor,icon,acticon},i) in nav" :key="i" :path="path" :activeColor="activeColor" >
      <img slot="icon" :src="icon" :alt="text" />
      <img slot="active-icon" :src="acticon" :alt="text" />
      <div slot="text">{{text}}</div>
    </bar-item>-->
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import BarItem from "components/common/tabbar/BarItem";
export default {
  components: {
    TabBar,
    BarItem,
  },
  data() {
    return {
      baseUrl: "@/assets/img/tabbar/",
      nav: [
        {
          path: "home",
          text: "首页",
          activeColor: "#00a7ff",
          icon: require("@/assets/img/tabbar/index.png"),
          acticon: require("@/assets/img/tabbar/index_act.png"),
        },
        {
          path: "category",
          text: "分类",
          activeColor: "#00a7ff",
          icon: require("@/assets/img/tabbar/fl.png"),
          acticon: require("@/assets/img/tabbar/fl_act.png"),
        },
        {
          path: "card",
          text: "购物车",
          activeColor: "#00a7ff",
          icon: require("@/assets/img/tabbar/gwc.png"),
          acticon: require("@/assets/img/tabbar/gwc_act.png"),
        },
        {
          path: "wd",
          text: "我的",
          activeColor: "#00a7ff",
          icon: require("@/assets/img/tabbar/wd.png"),
          acticon: require("@/assets/img/tabbar/wd_act.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>