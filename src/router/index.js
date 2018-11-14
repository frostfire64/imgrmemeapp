import Vue from 'vue'
import Router from 'vue-router'
import MemeMainView from '@/components/MemeMainView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemeMainView',
      component: MemeMainView
    }
  ]
})
