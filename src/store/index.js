import Vuex from 'vuex'
import Vue from 'vue'

import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    cart,
    products,
  },

  state: { // = data

  },

  getters: { // = compouted properties

  },

  actions: { // = methods

  },

  mutations: { // changing/updating the state

  },
})
