<template>
  <div id="app">

    <!-- 不销毁组件 排除detail组件-->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    

    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  name: 'App',
  components: { MainTabBar }
}
</script>

<style>
/* @import './assets/css/reset.css'; */
@import 'assets/css/base.css';

</style>