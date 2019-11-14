<template>
  <div>
    <h2>Your Cart</h2>
    <h3>Total: ${{ totalAmountDue }}</h3>
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
    // products () {
    //   return this.$store.getters.availableProducts
    // },
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
