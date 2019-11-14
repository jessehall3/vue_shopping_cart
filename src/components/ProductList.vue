<template>
  <div class="">
    <h2>Product List</h2>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="product in products">
        {{ product.title }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'

export default {
  data () {
    return {
      loading: false,
    }
  },
  computed: {
    products () {
      return this.$store.getters.availableProducts
    }
  },
  created () {
    this.loading = true
    this.$store.dispatch('fetchProducts')
      .then(() => this.loading = false)
  }
}
</script>
