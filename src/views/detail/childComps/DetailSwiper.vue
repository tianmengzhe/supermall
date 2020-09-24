<template>
   <swiper class="dswiper">
        <swiper-item v-for="(item,i) in list" :key="i">
            <img :src="item" alt="" >
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper, SwiperItem
    },
    props:{
        list:{
            type: Array,
            default: ()=>[]
        }
    }
}
</script>

<style scoped>
.dswiper{
    height: 200px;
    overflow: hidden;
}
</style>