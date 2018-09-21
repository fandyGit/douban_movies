<template>
  <div id="app">
    <router-view></router-view>
    <Footer :title="this.$route.path"></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  import {reqHome} from './api/index'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style>
html,body{
  height: 100%;
  overflow: hidden;
}
</style>
