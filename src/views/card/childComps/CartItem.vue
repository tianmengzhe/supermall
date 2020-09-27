<template>
  <div class="item">
      <div class="left">
          <check-button class="check" @click.native="chengChange" :check="obj.checked"/>
      </div>
      <div class="right">
          <div><img src="~assets/img/213731-1556804251d705.jpg" alt=""></div>
          <div class="text">
              <div class="title">{{obj.title}}</div>
              <div class="introduce">{{obj.introduce}}</div>
              <div class="row">
                  <span>￥{{obj.price}}</span>
                  <span>x{{obj.count}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {UP_CHECKED} from 'store/const'
export default {
    props:{
        obj:{
            type: Object,
            default: ()=>({})
        }
    },
    components:{
        CheckButton
    },
    methods:{
        chengChange(){
            // 修改选中状态
            this.$store.commit(UP_CHECKED, this.obj.id)
        }
    }
}
</script>

<style scoped>
.item{
    margin: 5px 0;
}
.item,
.right,
.row{
    display: flex;
}
.right{
    flex: 1;
}
.item img{
    width: 60px;
    height: 80px;
    border-radius: 4px;
}
.left{
    width: 30px;
}
.check{
    margin:30px auto 0;
}
.text{
    margin:0 10px;
    flex:1;
}
.title{
    font-weight: bold;
}
.introduce{

}
.row{
    justify-content: space-between;
}
</style>