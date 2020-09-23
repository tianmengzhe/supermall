<template>
  <div class="detail">
      
    <detail-nav-bar />

  </div>
</template>

<script>
import DetailNavBar from "views/detail/childComps/DetailNavBar";
export default {
    components:{
        DetailNavBar
    },
    data(){
        return {
            id:null
        }
    },
    created(){
        this.id = this.$route.params.id
    },
    methods:{

    }
}
</script>

<style scoped>

</style>