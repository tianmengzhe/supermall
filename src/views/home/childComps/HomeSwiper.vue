<template>
    <div>
        <!-- 轮播图部分 -->
        <swiper>
            <swiper-item v-for="item in list" :key="item.id">
                <a :href="item.link" >
                    <img :src="item.img" alt="" @load="imgLoad">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper, SwiperItem
    },
    props:{

    },
    data(){
        return {
            list:[
                {id:0, link:'', img:require("assets/img/221307-15784063870d2e.jpg")},
                {id:1, link:'', img:require("assets/img/221307-15784063870d2e.jpg")},
                {id:2, link:'', img:require("assets/img/221307-15784063870d2e.jpg")},
                {id:3, link:'', img:require("assets/img/221307-15784063870d2e.jpg")}
            ],
            load:false
        }
    },
    methods:{
        imgLoad(){
            if(!this.load){
                this.load = true
                this.$emit('swiperImgLoad')
            }
        }
    }
}
</script>

<style scoped>

</style>