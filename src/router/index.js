import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import home1 from '@/components/Home1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home1',
      name: 'home1',
      component: home1
    }
  ]
})
