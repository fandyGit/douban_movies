<template>
  <section>
    <mt-header title="豆瓣影音">
      <mt-button  slot="left"
                  @click.native="cityList"
      >{{city}}</mt-button>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(banner,index) in banners" :key="index">
        <img :src="banner.images.large" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <!--列表显示-->
    <h4>电影首页</h4>
    <section class="wrapper" ref="wrapper">
      <ul class="content" >
        <li v-for="(home,index) in homes"
            :key="index">
          <img v-lazy="home.images.small" alt="">
          <p>片名:{{home.title}}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "Home",
    data(){
      return{

      }
    },
    mounted(){
      this.$store.dispatch('getHomes',()=>{
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY:true,
            probeType:3
          })
        })
      })
    },
    computed:{
      ...mapState(['homes','city']),
      banners(){
        return this.homes.sort((a,b)=>{
          return b['collect_count']-a['collect_count'];
        }).slice(0,4);
      }
    },
    methods:{
      cityList(){
        this.$router.replace('/citylist');
      }
    }
  }
</script>

<style scoped>
  .mint-swipe-item>img{
    width: 100%;
  }
  .mint-swipe{
    height: 200px;
  }
  .wrapper{
    height: 330px;
    overflow: hidden;
    z-index: -100;

  }
  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

  }
  ul>li{
    width: 120px;
    height: 130px;
    margin-bottom: 15px;

  }
  ul>li>img{
    width: 120px;
    height: 100px;
  }
  h4{
    padding: 15px;
    font-size: 18px;
  }
</style>
