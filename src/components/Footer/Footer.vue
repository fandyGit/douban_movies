<template>
  <mt-tabbar ref="tabbar" v-model="selected">
    <mt-tab-item id="首页" @click.native="goTO('/home')">
      <img slot="icon" src="./images/home.svg">
      <span>首页</span>
    </mt-tab-item>
    <mt-tab-item id="正在热映" @click.native="goTO('/hotshowing')">
      <img slot="icon" src="./images/device-mobile.svg">
      <span>正在热映</span>
    </mt-tab-item>
    <mt-tab-item id="即将上映" @click.native="goTO('/nowshowing')">
      <img slot="icon" src="./images/clock.svg">
      <span>即将上映</span>
    </mt-tab-item>
    <mt-tab-item id="新片榜" @click.native="goTO('/newmovies')">
      <img slot="icon" src="./images/eye.svg">
      <!--<span class="item_icon">
        <i class="iconfont icon-shoubiao"></i>
      </span>-->
      <span>新片榜</span>
    </mt-tab-item>
    <mt-tab-item id="TOP250" @click.native="goTO('/top250')">
      <img slot="icon" src="./images/gift.svg">
      <span>TOP250</span>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>

  export default {
    name: "Footer",
    props:{
      title:String,
    },
    data(){
      return{
        selected:'首页'
      }
    },
    methods:{
      goTO(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style>
  .mint-tab-item{
    display: flex;
    flex-direction: column;
  }
  /*.mint-tab-item-label{
    height: 40px;
    text-align: center;
    line-height: 40px;
    display: flex;
    justify-content: center;
  }*/
</style>
