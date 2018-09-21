<template>
  <div class="wrapper" ref="newshow">
    <!--<router-link to="/movieshowing">movieShowing</router-link>-->
    <ul class="content">
      <li v-for="(movie,index) in newMovies" :key="index">
        <div class="left">
          <img v-lazy="movie.images.small" alt="" style="float: left;">
        </div>
        <div class="right">
          <p>片名:{{movie.title}}</p>
          <p>电影类型:
            <span v-for="(styles,index) in movie.genres" :key="index">{{styles}}</span>
          </p>
          <p>评分：{{movie.rating.average}}</p>
          <p>上映时间：{{movie.year}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: "NewMovies",
    mounted(){
      this.$store.dispatch('getNewMovies',()=>{
        this.$nextTick(()=>{
          new BScroll(this.$refs.newshow,{
            scrollY: true,
            probeType:3
          });
        })
      })
    },
    computed:{
      ...mapState(['newMovies'])
    }
  }
</script>

<style>
  ul{
  }
  ul>li{
    height: 130px;
    clear: both;
  }
  .wrapper{
    height: 610px;
    /*overflow: hidden;*/
  }
  ul>li>div>img{
    width: 120px;
    height: 120px;
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
