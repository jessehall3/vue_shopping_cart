<template>
  <div class="">
    <h2>Product List</h2>
    <p v-if="loading">Loading...</p>
    <span v-else>
      <ul>
        <li v-for="product in products">
          {{ product.title }} - {{ product.price | currency }} - {{ product.inventory }}
          <button
            @click="addProductToCart(product)"
            :disabled="!productIsInStock(product)">
            Add To Cart
          </button>
        </li>
      </ul>
      <p v-if="products.length === 0">
       We're sold out of everything!
       Please stop by again.
      </p>
    </span>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapState({
      products: state => state.products.items
    }),

    ...mapGetters({
      productIsInStock: 'productIsInStock'
    }),
  },

  methods: {
    ...mapActions({
      addProductToCart: 'addProductToCart',
      fetchProducts: 'fetchProducts',
    })
  },

  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>
