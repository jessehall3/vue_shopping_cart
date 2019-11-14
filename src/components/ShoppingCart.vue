<template>
  <div>
    <h2>Your Cart</h2>
    <span>
      <ul>
        <li v-for="product in products">
          {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
          <button @click="addProductToCart(product)">Add To Cart</button>
        </li>
      </ul>
      <p v-if="products.length === 0">
       Nothing in your cart.
      </p>
    </span>
    <h3>Total: {{ totalAmountDue | currency}}</h3>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     total: 0,
  //   }
  // },
  computed: {
    products () {
      return this.$store.getters.cartProducts
    },
    totalAmountDue () {
      return this.$store.getters.totalAmountDue
    },
  },
  // methods: {
  //   addProductToCart (product) {
  //     this.$store.dispatch('addProductToCart', product)
  //   }
  // },
  // created () {
  //   this.loading = true
  //   this.$store.dispatch('fetchProducts')
  //     .then(() => this.loading = false)
  // }
}
</script>
