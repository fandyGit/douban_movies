/*
*
* */
import ajax from './ajax'
const BASE_URL='/api';

//获取首页的数据
export const reqHome=(apikey,city)=>ajax(BASE_URL+'/in_theaters',{apikey,city});
//获取正在热映的电影
export const reqHotShowing=(apikey,city)=>ajax(BASE_URL+'/in_theaters',{apikey,city});
//获取即将热映的电影
export const reqNowShowing=(apikey,city)=>ajax(BASE_URL+'/coming_soon',{apikey,city});
//获取新片榜的电影
export const reqNewMovies=(apikey,city)=>ajax(BASE_URL+'/new_movies',{apikey,city});
//获取TOP250的电影
export const reqTopMovies=(apikey,city)=>ajax(BASE_URL+'/top250',{apikey,city});
//获取城市列表
export const reqCityList=()=>ajax('/citylist');
