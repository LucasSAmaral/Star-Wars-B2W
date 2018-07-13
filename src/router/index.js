import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/paginas/Home'
import Planets from '@/paginas/Planets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planets',
      name: 'Planets',
      component: Planets
    }
  ]
})
