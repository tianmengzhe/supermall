<template>
  <div class="tabControl">
      <div 
        v-for="(item,i) in titles" 
        @click="liClick(i)"
        :key="i">
        <span :class="{act:actIndex === i}">{{item}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default:()=>[]
        }
    },
    data(){
        return {
            actIndex:0
        }
    },
    methods:{
        liClick(i){
            this.actIndex = i
            this.$emit('typeClick',i)
        }
    }
}
</script>

<style scoped>
.tabControl{
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
}
.tabControl>div{
    flex: 1;
    text-align: center;
}
.tabControl>div>span{
    border-bottom: 2px solid white;
    padding: 5px;
}
.tabControl>div>span.act{
    color: var(--color-high-text);
    border-color: var(--color-tint);
}
</style>