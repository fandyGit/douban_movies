
import {
  RECEIVE_HOME,
  RECEIVE_HOT_SHOWING,
  RECEIVE_NOW_SHOWING,
  RECEIVE_NEW_MOVIES,
  RECEIVE_TOP_MOVIES,
  RECEIVE_CITY_LIST,
  SET_CURRENT_CITY
} from './mutation-type'

export default {
  [RECEIVE_HOME](state,{homes}){
    return state.homes=homes;
  },
  [RECEIVE_HOT_SHOWING](state,{hotShowing}){
    return state.hotShowing=hotShowing;
  },
  [RECEIVE_NOW_SHOWING](state,{nowShowing}){
    return state.nowShowing=nowShowing;
  },
  [RECEIVE_NEW_MOVIES](state,{newMovies}){
    return state.newMovies=newMovies;
  },
  [RECEIVE_TOP_MOVIES](state,{topMovies}){
    return state.topMovies=topMovies;
  },
  [RECEIVE_CITY_LIST](state,{cityList}){
    return state.cityList=cityList;
  },
  [SET_CURRENT_CITY](state,{city}){
    return state.city=city;
  },
}
