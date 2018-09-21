<template>
    <div class="citylist">
      <mt-header title="选择城市">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <mt-index-list>
        <mt-index-section v-if="citys.length"
          v-for="(citys,letter) in indexCity"
          :key="letter"
          :index="letter">
          <mt-cell v-for="(city,index) in citys"
                   :key="index"
                   :title="city.name"
                   @click.native="setCurrentCity(city.name)"
          >{{city.name}}</mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "CityList",
    data(){
      return{
        indexCity:[],
      }
    },
    methods:{
      setCurrentCity(city){
        this.$store.dispatch('setCurrentCity',city);
        this.$router.replace('/home');
      }
    },
    watch:{

    },
    mounted(){
      this.$store.dispatch('getCityList',()=>{
        this.$nextTick(()=>{
          let indexCity={};
          // 以字母作为属性写入对象indexCity
          'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('').forEach(letter=>{
            indexCity[letter] = [];
          });
          function getCity(items){
            for(let item of items){
              if(item.id%10000 === 0){
                // 直辖市，特别行政区
                if(item.municipality || item.special){
                  addCity(item);
                }else{
                  // 省份进入递归调用
                  getCity(item.regions);
                }
              }else{
                // 城市处理
                addCity(item);
              }
            }
          };
          function addCity(item){
            let {id,name,pinyin} = item;
            indexCity[item.pinyin[0]].push({
              id,
              name,
              pinyin
            });
          };

          getCity(this.cityList.regions);
          this.indexCity = indexCity;
          /*console.log(this.cityList.regions)
          console.log(indexCity);*/
        })
      });
    },
    computed:{
      ...mapState(['cityList','city'])
    },
    created(){


    }
  }
</script>

<style>

</style>
