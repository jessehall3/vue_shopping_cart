<template>
  <div class="">
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'

import store from '@/store/'

export default {
  computed: {
    products () {
      return store.state.products
    }
  },
  created () {
    shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>
