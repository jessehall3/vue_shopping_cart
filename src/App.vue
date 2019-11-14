<template>
  <div id="app">
    <h1>Shopping Cart App</h1>
    <hr>
    <product-list/>
    <hr>
    <shopping-cart/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'

import ShoppingCart from './components/ShoppingCart'

export default {
  name: 'app',
  components: {
    'product-list': ProductList,
    'shopping-cart': ShoppingCart,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
