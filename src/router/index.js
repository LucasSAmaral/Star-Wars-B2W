import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/paginas/Home'
import Planets from '@/paginas/Planets'
import AboutStarWars from '@/paginas/AboutStarWars'
import AboutMe from '@/paginas/AboutMe'

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
    },
    {
      path: '/aboutstarwars',
      name: 'AboutStarWars',
      component: AboutStarWars
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
