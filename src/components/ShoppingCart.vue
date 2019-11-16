<template>
  <div>
    <h2>Your Cart</h2>
    <span>
      <ul>
        <li v-for="product in products">
          {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
        </li>
      </ul>
      <p v-if="products.length === 0">
       Nothing in your cart.
      </p>
    </span>
    <h3>Total: {{ cartTotal | currency}}</h3>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">Checkout Status: {{ checkoutStatus }}</p>
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: 'checkoutStatus',
    }),

    ...mapGetters({
      products: 'cartProducts',
      cartTotal: 'cartTotal',
    }),
  },

  methods: {
    checkout () {
      if (this.products.length === 0) return

      this.$store.dispatch('checkout')
    }
  },
}
</script>
