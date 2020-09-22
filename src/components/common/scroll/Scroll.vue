<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0, // 0 1 2 3
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bScroll: null,
    };
  },
  mounted() {
    this.bScroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad, // 上拉加载更多
      click: true,
    });

    

    // 在图片加载完成 触发 <img src='' @load="">

    // const hooks = this.bScroll.scroller.actionsHandler.hooks
    // hooks.on('start', (event) => {
    //   this.bScroll.refresh() //刷新bScroll 重新获取滚动高度
    // })

    // bScroll 滚动高度不能变化 this.bScroll.scrollerHeight  此时图片还没加载完成  监听图片加载完成 刷新bScroll

    // 监听滚动
    this.bScroll.on("scroll", (position) => {
      this.$emit('scroll',position)
    });

    this.bScroll.on("pullingUp", () => {
      this.$emit('pullingUp',()=>{
        this.bScroll.finishPullUp()
      }) 
    });
  },
  methods:{
    scrollRefresh(){
      this.bScroll.refresh() // 刷新bScroll 重新计算scrollerHeight
    },
    scrollTo(x=0, y=0, time=500){
      this.bScroll.scrollTo(x, y, time)
    },
    refresh(){
      this.bScroll.refresh()
    }
  }
};
</script>

<style scoped>

</style>