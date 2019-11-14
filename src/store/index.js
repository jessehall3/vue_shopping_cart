import Vuex from 'vuex'

import Vue from 'vue'

import shop from '@/api/shop'

Vue.use(Vuex)


const _getCartItemById = (context, id) => {
  return context.state.cart.find( cartItem => {
    return cartItem.id === id
  })
}

export default new Vuex.Store({
  state: { // = data
    products: [],
    // {id, quantity}
    cart: [],
    totalAmountDue: 0,
  },

  getters: { // = compouted properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },

    totalAmountDue (state, getters) {
      return state.totalAmountDue
    },
  },

  actions: { // = methods
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      });
    },

    addProductToCart (context, product){
      if (product.inventory <= 0) return

      const cartItem = _getCartItemById(context, product.id)

      if (!cartItem ) {
        context.commit('pushProductToCart', product.id)
      } else {
        context.commit('incrementItemQuantity', cartItem)
      }

      context.commit('decrementProductInventory', product)
    },
  },

  mutations: { // changing/updating the state
    setProducts (state, products) {
      state.products = products
    },

    pushProductToCart (state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      })
    },

    incrementItemQuantity(state, cartItem){
      cartItem.quantity += 1
    },

    decrementProductInventory(state, product){
      product.inventory -= 1
    },
  },
})
