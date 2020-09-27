<template>
  <div class="bottom-bar" v-show="isShow">
       <div class="cleft">
           <check-button class="check" @click.native="chengChange" :check="isAllSelect"/>
           全选
       </div>
       <div class="cright">
           <div class="sum">
           合计：{{sumPrice}}
        </div>
            <div class="close" @click="calcClick">去结算({{checkLength}})</div>
       </div>

        <!-- 弹窗 -->
        <toast ref='toast' />
  </div>
</template>

<script>
import Toast from "components/common/toast/Toast";
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapState } from 'vuex'
import { UP_CHECKED_ALL_TRUE} from 'store/const'
export default {
    components:{
        CheckButton,Toast
    },
    data(){
        return{
            check:false,
        }
    },
    computed:{
        ...mapState(['cartList']),
        sumPrice(){
            return '￥'+ this.cartList.filter(item=>item.checked).reduce((prev,item)=>prev+(item.price*item.count) ,0)
        },
        checkLength(){
            return this.cartList.filter(item=>item.checked).length
        },
        isShow(){
            return this.cartList.length
        },
        isAllSelect(){
            return this.cartList.length - this.checkLength === 0 && this.cartList.length !== 0
        }
    },
    methods:{
        chengChange(){
            this.check = !this.isAllSelect
            this.$store.commit(UP_CHECKED_ALL_TRUE,this.check)
        },
        calcClick(){ // 结算
            if(this.checkLength <= 0){
                this.$refs.toast.show('请选择商品！')
                return 
            }
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height: 30px;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    font-size: 14px;
    display: flex;
    line-height: 30px;
    background-color: #ebe5e5;
}
.cleft{
    display: flex;
}
.check{
    margin: 5px 5px 0;
}
.cright{
    flex: 1;
    display: flex;
}
.sum{
    flex: 1;
    margin-left: 15px;
}
.close{
    width: 80px;
    background-color: aquamarine;
    text-align: center;
}
</style>