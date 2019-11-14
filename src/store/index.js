import Vuex from 'vuex'

import Vue from 'vue'

import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = compouted properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },
  },

  actions: { // = methods
    fetchProducts (context) {
      shop.getProducts(products => {
        context.commit('setProducts', products)
      })
    }
  },

  mutations: { // chaning/updating the state
    setProducts (state, products) {
      state.products = products
    }
  },
})
