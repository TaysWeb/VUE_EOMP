import { createStore } from 'vuex'

export default createStore({
  state: {
    Cups:null,
    Coffee:null
  },
  mutations: {
    setCups : (state, value) => {
      state.Cups = value 
    },
    setCoffee : (state, value) => {
      state.Coffee = value 
    }
  },
  actions: {
  },
  
})
