<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- v-show 直接写在slot上无效 被替换调了 -->
    <div v-show="!isActive"><slot name="icon"></slot></div>
    <div v-show="isActive"><slot name="active-icon"></slot></div>
    <div :style="isActiveStyle"><slot name="text"></slot></div>
    

    <!-- <img src="@/assets/img/tabbar/index.png" alt="首页" />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            // isActive:true
        }
    },
    props:{
        path:{
            type:String,
            required:true
        },
        activeColor:{
            default:'#00a7ff'
        }
    },
    created(){
        // console.log(this.$route,this.$route.name === this.path)
    },
    computed:{
        isActive(){
            return this.$route.name === this.path
        },
        isActiveStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push({name:this.path})
        }
    }
};
</script>

<style scpped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 5px 0 1px;
  vertical-align: middle;
}
</style>