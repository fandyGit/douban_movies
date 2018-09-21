
import {
  RECEIVE_HOME,
  RECEIVE_HOT_SHOWING,
  RECEIVE_NOW_SHOWING,
  RECEIVE_NEW_MOVIES,
  RECEIVE_TOP_MOVIES,
  RECEIVE_CITY_LIST,
  SET_CURRENT_CITY
} from './mutation-type'

import {
  reqHome,
  reqHotShowing,
  reqNowShowing,
  reqNewMovies,
  reqTopMovies,
  reqCityList
} from "../api";
const apikey='0b2bdeda43b5688921839c8ecb20399b'
export default {
  //1异步获取首页数据
  async getHomes({commit,state},callback){
    const city=state.city.replace(/市$/,'')
    const result =await reqHome(apikey,city);
    console.log(result)
    if(result.count>0){
      const homes=result.subjects;
      commit(RECEIVE_HOME,{homes})
      callback&&callback();
    }
  },
  //2异步获取热映电影数据
  async getHotShowing({commit,state},callback){
    const city=state.city.replace(/市$/,'')
    const result =await reqHotShowing(apikey,city);
    console.log(result)
    if(result.count>0){
      const hotShowing=result.subjects;
      commit(RECEIVE_HOT_SHOWING,{hotShowing})
      callback&&callback();
    }
  },
  //3异步获取即将热映电影数据
  async getNowShowing({commit,state},callback){
    const city=state.city.replace(/市$/,'')
    const result =await reqNowShowing(apikey,city);
    console.log(result)
    if(result.count>0){
      const nowShowing=result.subjects;
      commit(RECEIVE_NOW_SHOWING,{nowShowing})
      callback&&callback();
    }
  },
  //4异步获新片榜电影数据
  async getNewMovies({commit,state},callback){
    const city=state.city.replace(/市$/,'')
    const result =await reqNewMovies(apikey,city);
    console.log(result)
    if(result.subjects.length>0){
      const newMovies=result.subjects;
      commit(RECEIVE_NEW_MOVIES,{newMovies})
      callback&&callback();
    }
  },
  //5异步获TOP250电影数据
  async getTopMovies({commit,state},callback){
    const city=state.city.replace(/市$/,'')

    const result =await reqTopMovies(apikey,city);
    console.log(result)

    if(result.count>0){
      const topMovies=result.subjects;
      commit(RECEIVE_TOP_MOVIES,{topMovies})
      callback&&callback();
    }
  },
  //5异步获TOP250电影数据
  async getTopMovies({commit,state},callback){
    const city=state.city.replace(/市$/,'')
    const result =await reqTopMovies(apikey,city);
    if(result.count>0){
      const topMovies=result.subjects;
      commit(RECEIVE_TOP_MOVIES,{topMovies})
      callback&&callback();
    }
  },
  //6异步获城市列表数据
  async getCityList({commit},callback){
    const result =await reqCityList();
    console.log(result)
    if(result.code===0){
      const cityList=result.data;
      commit(RECEIVE_CITY_LIST,{cityList})
      callback&&callback();
    }
  },
  //7同步设置城市数据
  async setCurrentCity({commit},city,callback){
   commit(SET_CURRENT_CITY,{city});
   callback&&callback();
  },
}
