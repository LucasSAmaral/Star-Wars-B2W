import Vue from 'vue'
import Home from '@/paginas/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#play-game').textContent)
      .toEqual('Play Game')
  })
})
