import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = compouted properties
    productsCount () {

    }
  },

  actions: { // = methods
    fetchProducts () {
      // make the call
    }
  },

  mutations: { // chaning/updating the state
    setProducts (state, products) {
      state.products = products
    }
  },
})
