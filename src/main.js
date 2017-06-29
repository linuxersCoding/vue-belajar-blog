/**
 * @Author: linuxers
 * @Date:   2017-06-29T20:47:39+07:00
 * @Email:  kunhernowoputra@gmail.com
 * @Filename: main.js
 * @Last modified by:   linuxers
 * @Last modified time: 2017-06-29T20:59:42+07:00
 */



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

window.axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
