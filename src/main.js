// polyfill
import 'babel-polyfill';
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store';
import VueResource from "vue-resource"
import Axios from "axios"
import qs from "qs"
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)



Vue.prototype.$axios = Axios
Vue.use(VueResource)
import { Tabs,  TabPane,Message,Button} from 'element-ui'
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Vuex)
Vue.prototype.$message = Message
Vue.use(Button)
// 数据地址
Vue.prototype.HOST = '/api'
Vue.prototype.URL = '/url'








// 请求拦截
Axios.interceptors.request.use(function(config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function(error) {
  return Promise.reject(error);
});

Axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
