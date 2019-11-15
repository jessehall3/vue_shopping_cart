import Vuex from 'vuex'

import Vue from 'vue'

import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: [],
    // {id, quantity}
    cart: [],
    checkoutStatus: null,
  },

  getters: { // = compouted properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },

    cartProducts (state) {
      return state.cart.map(cartItem => {

        const product = state.products.find(product => product.id === cartItem.id)

        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
        }
      })
    },

    cartTotal (state, getters) {
      return getters.cartProducts.reduce( (total, {price, quantity}) => {
        return total + (price * quantity)
      } , 0)
    },

    productIsInStock (state, getters){
      return (product) => {
        return product.inventory > 0
      }
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

      if (context.state.checkoutStatus === 'success'){
        context.commit('setCheckoutStatus', null) // we only show the status if it is a recent succes (no added items), or it is still on 'failure'
      }

      const cartItem = context.state.cart.find(cartItem => {
        return cartItem.id === product.id
      })

      if (!cartItem ) {
        context.commit('pushProductToCart', product.id)
      } else {
        context.commit('incrementItemQuantity', cartItem)
      }

      context.commit('decrementProductInventory', product)
    },

    checkout ({state, commit}) {
      const checkoutSuccess = () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      }

      const checkoutFailure = () => {
        commit('setCheckoutStatus', 'failure')
      }

      shop.buyProducts( state.cart, checkoutSuccess, checkoutFailure)
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

    incrementItemQuantity (state, cartItem){
      cartItem.quantity += 1
    },

    decrementProductInventory (state, product){
      product.inventory -= 1
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    emptyCart (state) {
      state.cart = []
    }
  },
})
