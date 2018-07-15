import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/paginas/Home'
import Planets from '@/paginas/Planets'
import AboutTheApp from '@/paginas/AboutTheApp'
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
      path: '/abouttheapp',
      name: 'AboutTheApp',
      component: AboutTheApp
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
