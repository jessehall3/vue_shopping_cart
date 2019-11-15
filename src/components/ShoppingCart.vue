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
    <h3>Total: {{ totalAmountDue | currency}}</h3>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">Checkout Status: {{ checkoutStatus }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.getters.cartProducts
    },
    totalAmountDue () {
      return this.$store.getters.totalAmountDue
    },
    checkoutStatus () {
      return this.$store.state.checkoutStatus
    }
  },
  methods: {
    checkout () {
      if (this.products.length === 0) return

      this.$store.dispatch('checkout')
    }
  },
}
</script>
