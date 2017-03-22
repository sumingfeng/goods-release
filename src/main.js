import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import routerConfig from './routerConfig.js'
import Loading from './comp/loading'

Vue.use(Loading)
Vue.use(vueRouter)

const router = new vueRouter({
  routes:routerConfig
})
new Vue({
  el: '#app',
  Loading,
  router,
  render: h => h(App)
})
