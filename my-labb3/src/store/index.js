import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    advice: null,
    counterI: 0,
    counterD: 0
  },
  mutations: {
    myMutation(state, amount){
      state.counter += amount
    },
    setAdvice(state, advice){
      state.advice = advice
    }

  },
  actions: {
    fetchAdvice(){
      fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((result) => this.commit('anAdvice', result))
    },
    // fetchActivity(){
    //   fetch('https://www.boredapi.com/api/activity/')
    //     .then((response) => response.json())
    //     .then((result) => this.commit('anActivity', result))
    // }
  },
  modules: {
  }
})
