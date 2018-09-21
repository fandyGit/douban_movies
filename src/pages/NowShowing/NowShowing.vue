<template>
  <div class="wrapper">
    <!--<router-link to="/hotshowing">HotShowing</router-link>-->
    <ul class="content">
      <li v-for="(now,index) in nowShowing" :key="index">
        <div class="left">
          <img v-lazy="now.images.small" alt="" style="float: left;">
        </div>
        <div class="right">
          <p>片名:{{now.title}}</p>
          <p>电影类型:
            <span v-for="(styles,index) in now.genres" :key="index">{{styles}}</span>
          </p>
          <p>评分：{{now.rating.average}}</p>
          <p>上映时间：{{now.year}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "NowShowing",
    created(){
      this.$store.dispatch('getNowShowing',()=>{
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollY: true,
            probeType:3

          });
        })
      });
    },
    computed:{
      ...mapState(['nowShowing'])
    }
  }
</script>

<style scoped>
  ul{
  }
  ul>li{
    height: 130px;
    clear: both;
  }
  ul>li>div>img{
    width: 120px;
    height: 120px;
  }
  .left{
    width: 120px;
    float: left;
  }
  .wrapper{
    height: 610px;
  }
  .right{
    width: 200px;
    box-sizing: padding-box;
    padding: 15px;
    float: left;
  }
  .right>p{
    line-height: 24px;
  }
</style>
