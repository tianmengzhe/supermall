<template>
    <div>
        轮播图部分
        <swiper>
            <swiper-item v-for="item in list" :key="item.id">
                <a :href="item.link">
                    <img :src="item.img" alt="">
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
            list:[]
        }
    }
}
</script>

<style scoped>

</style>