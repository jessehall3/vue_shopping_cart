<template>
  <div class="">
    <h2>Product List</h2>
    <p v-if="loading">Loading...</p>
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
  data () {
    return {
      loading: false,
    }
  },
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    this.loading = true
    store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>
