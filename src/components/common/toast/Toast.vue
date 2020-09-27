<template>
  <div class="toast" v-show="isShow">
      {{text}}
  </div>
</template>

<script>
export default {
    name:'Toast',
    data(){return{
        text:'',
        isShow:false
    }},
    methods:{
        show(text, time=1500){
            this.text = text
            this.isShow = true
            setTimeout(()=>{
                this.isShow = false
            },time)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding:4px 10px;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    border-radius: 5px;
    line-height: 16px;
    font-size: 12px;
    z-index: 9999;
}
</style>