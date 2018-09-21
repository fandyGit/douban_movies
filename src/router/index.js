import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
 import Home from '../pages/Home/Home'
 import HotShowing from '../pages/HotShowing/HotShowing'
 import NowShowing from '../pages/NowShowing/NowShowing'
 import NewMovies from '../pages/NewMovies/NewMovies'
 import Top250 from '../pages/Top250/Top250'
 import CityList from '../pages/CityList/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/hotshowing',
      component:HotShowing,
    },
    {
      path:'/nowshowing',
      component:NowShowing,
    },
    {
      path:'/newmovies',
      component:NewMovies,
    },
    {
      path:'/top250',
      component:Top250,
    },
    {
      path:'/citylist',
      component:CityList
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
