import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    advice: null
  },
  mutations: {
  },
  actions: {
    fetchAdvice(){
      fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((result) => this.commit('anAdvice', result))
    }
  },
  modules: {
  }
})
