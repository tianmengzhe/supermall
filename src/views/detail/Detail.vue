<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav-bar ref="navbar" class="detail-nav" @navClick="navClick" />

    <scroll ref="detailScroll"  class="detailContent" :pull-up-load="true" :probe-type="3" @scroll="scroll" @pullingUp="loadMore">
      <!-- 商品 -->
      <div>
        <!-- 轮播图 -->
        <detail-swiper :list="topImgs" />
        <!-- 商品基本信息 -->
        <detail-info :goods="goods" />
        <!-- 店铺基本信息 -->
        <detail-shop-info :shop="shop" />
        <!-- 图片列表 -->
        <detail-img-info />
      </div>

      <!-- 参数 -->
      <detail-params-info ref="params" :goodsParams="goodsParams" />
      <!-- 评论 -->
      <detail-comment ref="comment" :info="commentInfo" />
      <!-- 推荐  -->
      <goods-list ref="recommend" :goods="recommendInfo" />
    </scroll>

    <!-- 底部工具栏 -->
    <detail-bottom-bar :id="id" class="bottom" @addCar="addCar"/>

    <!-- 回到顶部 -->
    <back-top @click.native="topClick" v-show="isTop" />

    <!-- 弹窗 -->
    <!-- <toast ref='toast' /> -->
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/CoodsList";
// import Toast from "components/common/toast/Toast";

import DetailNavBar from "views/detail/childComps/DetailNavBar";
import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailInfo from "views/detail/childComps/DetailInfo";
import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
import DetailParamsInfo from "views/detail/childComps/DetailParamsInfo";
import DetailComment from "views/detail/childComps/DetailComment";
// import DetailRecommend from "views/detail/childComps/DetailRecommend";
import DetailImgInfo from "views/detail/childComps/DetailImgInfo";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar";

import { mapActions } from "vuex";
import { debounce } from "common/utils";
import { getData } from "network/detail";
import { backTop} from 'common/mixin'
import { ADD_CART } from 'store/const'

export default {
  name: "detail",
  components: {
    Scroll,
    GoodsList,
    // Toast,

    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailParamsInfo,
    DetailComment,
    DetailImgInfo,
    DetailBottomBar,
  },
  data() {
    return {
      id: null,
      topImgs: [], // 轮播图数据
      goods: {}, // 商品信息
      shop: {}, // 店铺信息
      detailInfo: {}, // 商品详情
      goodsParams: {}, // 商品参数
      commentInfo: {}, // 评论信息
      recommendInfo: [], // 推荐数据
      topYs: [],
      nindex: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    getData(this.id).then((res) => {
      let onj = res.data;
      this.topImgs = onj.itemInfo.topImages;

      // 数据整合
      this.goods = {};
      this.shop = {};
      this.detailInfo = {};
      this.goodsParams = {};
      this.commentInfo = {};
      this.recommendInfo = [
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
      //   console.log(onj);

      // 页面dom加载完成 图片还未加载完成
      // this.$nextTick(()=>{ this.getTopYs() })
    });
  },
  mixins: [ backTop('detailScroll') ], // 注入混入
  mounted() {
    const scrollRefresh = debounce(()=>{
        this.scrollRefresh()
        this.getTopYs()
        console.log(this.topYs)
    });
    this.$bus.$on("imgdLoad", () => { scrollRefresh(); });
  },
  methods: {
    ...mapActions(['addCart']),
    getTopYs(){
        this.topYs = []
        this.topYs.push(0)
        this.topYs.push(this.$refs.params.$el.offsetTop)
        this.topYs.push(this.$refs.comment.$el.offsetTop)
        this.topYs.push(this.$refs.recommend.$el.offsetTop)
    },
    navClick(i) {
      // 导航点击 滚动到对应位置
      this.$refs.detailScroll.scrollTo(0, -this.topYs[i], 100)
    },
    scroll(pos) { // 滚动监听
        this.isTop = -pos.y > 340; // 回到顶部
      this.moveScroll(Math.abs(pos.y))
    },
    moveScroll(y){ // 处理滚动到一定距离 显示对应的导航信息
        let len = this.topYs.length
        for(let i = 0; i < len; i++){
            // this.nindex !== i  防止赋值过于频繁
            if(this.nindex !== i && ((i < len-1 && y >= this.topYs[i] && y < this.topYs[i+1]) || (i === len-1 && y >= this.topYs[i]))){
            // 简化 在数组添加一个 最大值 然后直接判断 是否在区间内
               this.nindex = i
            }
        }
        this.$refs.navbar.tindex = this.nindex
    },
    loadMore(finishPullUp) {  // 上拉加载更多
      this.scrollRefresh();
      finishPullUp();
    },
    scrollRefresh() {
      this.$refs.detailScroll && this.$refs.detailScroll.refresh && this.$refs.detailScroll.refresh();
    },

    addCar(){ //添加到购物车
        // this.$store.dispatch('addCart',{id:this.id,title:'商品名称',introduce:'介绍',price:'99',checked:false})
        this.addCart({id:this.id,title:'商品名称',introduce:'介绍',price:'99',checked:false}).then(res=>{
          // this.$refs.toast.show(' 添加成功')
          this.$toast.show(' 添加成功')
        },err=>{ // 添加失败
          // this.$refs.toast.show(' 添加失败')
        })

    }
  },
};
</script>

<style scoped>
/* 盖住main-tab-bar */
.detail {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: white;
}
.detail-nav {
  /* background-color: var(--color-tint); */
  /* color: white; */
}
.detailContent {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    box-shadow: 0 0px 3px 0px rgba(0, 0, 0, .2);
}
</style>