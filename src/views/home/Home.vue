<template>
  <div>
    <div class="home-nav">
      <nav-bar>
        <div slot="center">cneter</div>
      </nav-bar>
    </div>
    
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'home',
  components:{NavBar}
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>