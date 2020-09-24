// vue 混入

import {debounce} from 'common/utils'
export const itemLiatenerMixin = {
    mounted(){
        const scrollRefresh = debounce(this.scrollRefresh)
        this.$bus.$on('imgLoad',()=>{
            // this.scrollRefresh()
            scrollRefresh()
        })
        console.log('混入的内容')
    }
}


// 混入 回到顶部组件
import BackTop from "components/content/backTop/BackTop";
export const backTop = function (scollName) {
    return {
        components: {
            BackTop
        },
        data(){
            return {
                isTop: false, //是否显示组件
            }
        },
        methods:{
            topClick(){ // 回到顶部
                this.$refs[scollName].scrollTo()
            },
        }
    }
}

