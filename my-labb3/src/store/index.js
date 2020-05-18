import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    advice: null,
    counterI: 0,
    counterD: 0,
    review:'Thanks for your reviews'
  },
  data() {
    // counterI = 0,
    //   counterD = 0
  },
  mutations: {
    myMutation(state, counterI) {
      state.counterI += counterI
    },
    myMutation2(state, counterI) {
      state.counterI -= counterI
    }

  },
  actions: {
    fetchAdvice() {
      fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((result) => this.commit('anAdvice', result))
    },

  },
  modules: {
  }
})
