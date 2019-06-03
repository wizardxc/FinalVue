// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/base.css';
import  store from './store'
import axios from 'axios'

import router from './router'
import App from './App.vue';
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.prototype.$axios = axios




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  // created (){
  //    store.dispatch('userLogin',false);
  //  },
  components: { App },
  template: '<App/>',

})

