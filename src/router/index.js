/**
 * @Author: linuxers
 * @Date:   2017-06-29T20:47:39+07:00
 * @Email:  kunhernowoputra@gmail.com
 * @Filename: index.js
 * @Last modified by:   linuxers
 * @Last modified time: 2017-06-29T20:54:04+07:00
 */



import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/pages/Blog'
Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'blog',
          component: Blog
      }
  ]
})
