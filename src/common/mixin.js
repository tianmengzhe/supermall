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