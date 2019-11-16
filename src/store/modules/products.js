import shop from '@/api/shop'

export default {

  namespaced: true,

  state: {
    items: [],
  },

  getters: {
    productIsInStock (state, getters){
      return (product) => {
        return product.inventory > 0
      }
    },
  },

  mutations: {
    setProducts (state, products) {
      state.items = products
    },

    decrementProductInventory (state, product){
      product.inventory -= 1
    },
  },

  actions: {
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      });
    },
  },
}
