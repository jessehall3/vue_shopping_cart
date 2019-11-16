import shop from '@/api/shop'

export default {

  state: {
    items: [],
    checkoutStatus: null,
  },

  getters: {
    cartProducts (state, getters, rootState) {
      return state.items.map(cartItem => {

        const product = rootState.products.items.find(product => {
          return product.id === cartItem.id
        })

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
  },

  mutations: {
    pushProductToCart (state, productId) {
      state.items.push({
        id: productId,
        quantity: 1,
      })
    },

    incrementItemQuantity (state, cartItem){
      cartItem.quantity += 1
    },

    setCheckoutStatus (state, status) {
      state.checkoutStatus = status
    },

    emptyCart (state) {
      state.items = []
    },
  },

  actions: {
    addProductToCart ({getters, state, commit, rootState}, product){
      if (!getters.productIsInStock(product)) return

      if (state.checkoutStatus === 'success'){
        commit('setCheckoutStatus', null) // we only show the status if it is a recent succes (no added items), or it is still on 'failure'
      }

      const cartItem = state.items.find(cartItem => {
        return cartItem.id === product.id
      })

      if (!cartItem ) {
        commit('pushProductToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      commit('decrementProductInventory', product)
    },

    checkout ({state, commit}) {
      const checkoutSuccess = () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      }

      const checkoutFailure = () => {
        commit('setCheckoutStatus', 'failure')
      }

      shop.buyProducts( state.items, checkoutSuccess, checkoutFailure)
    },
  },
}
