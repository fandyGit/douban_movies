<template>
  <div class="wrapper" ref="hotshow">
    <ul class="content">
      <li v-for="(hot,index) in hotShowing" :key="index">
        <div class="left">
          <img v-lazy="hot.images.small" alt="" style="float: left;">
        </div>
        <div class="right">
          <p>片名:{{hot.title}}</p>
          <p>电影类型:
            <span v-for="(styles,index) in hot.genres" :key="index">{{styles}}</span>
          </p>
          <p>评分：{{hot.rating.average}}</p>
          <p>上映时间：{{hot.year}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "HotShowing",
    mounted(){
      this.$store.dispatch('getHotShowing',()=>{
        this.$nextTick(()=>{
          new BScroll(this.$refs.hotshow,{
            scrollY: true,
            probeType:3

          });
        })
      });
    },
    computed:{
      ...mapState(['hotShowing'])
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
  .wrapper{
    height: 610px;
    /*overflow: hidden;*/
  }
  .left{
    width: 120px;
    float: left;
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
