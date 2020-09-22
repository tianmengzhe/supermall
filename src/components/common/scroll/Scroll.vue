<template>
  <div class="scroll" ref="wrapper">
    <!-- :style="{height:height+'px'}"  -->
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
    height: {
      type: [Number, String],
      default: 1200,
    },
  },
  data() {
    return {
      bScroll: null,
    };
  },
  mounted() {
    this.bScroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click: true
    });

    const hooks = this.bScroll.scroller.actionsHandler.hooks
    hooks.on('start', (event) => {
      this.bScroll.refresh() //刷新bScroll 重新获取滚动高度
    })

    // bScroll 滚动高度不能变化

    //     this.bScroll.on("scroll", (position) => {
    //       console.log(position);
    //     });
  },
  methods:{
    scrollRefresh(){
      this.bScroll.refresh() // 刷新bScroll 不然滚动高度不对
    },
    scrollTo(x=0, y=0, time=500){
      this.bScroll.scrollTo(x, y, time)
    }
  }
};
</script>

<style scoped>

</style>