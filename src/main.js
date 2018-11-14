// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap' // eslint-disable-line
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/main'
Vue.use(Vuex)

Vue.config.productionTip = false

window.store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
