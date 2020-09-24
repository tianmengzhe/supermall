<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/down.png">
    </div>
    <div slot="center" class="titles">
      <div v-for="(item,i) in titles" :key="i" @click="tClick(i)" :class="{act:tindex===i}">{{item}}</div>
    </div>
    <div slot="right"></div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      tindex: 0,
    };
  },
  methods: {
    tClick(i) {
      this.tindex = i;
      this.$emit('navClick' ,i)
    },
    backClick(){ // 返回上一页
        this.$router.go(-1)
        // this.$router.back()
    }
  },
};
</script>

<style scoped>
.titles {
  display: flex;
  justify-content: center;
  font-size: 12px;
}
.titles > div {
  flex: 1;
}
.titles > div.act {
  color: pink;
}
.back img{
    width: 16px;
    margin: 13px 0 0 13px;
    display: block;
}
</style>