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
      return store.getters.availableProducts
    }
  },
  created () {
    store.dispatch('fetchProducts')
  }
}
</script>
