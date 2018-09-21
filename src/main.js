// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import './mock/mockServer'
import loading from '../static/imgs/loading.gif'
Vue.use(VueLazyload,{
  loading,
})

import {
  Tabbar, TabItem ,
  Header ,Button ,
  Swipe,SwipeItem,
  IndexList, IndexSection,
  Cell
} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Button .name, Button );
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
