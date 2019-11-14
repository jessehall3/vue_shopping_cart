<template>
  <div id="app">
    <h1>Hello world</h1>
    <h1>{{ hi }}</h1>
    <h1>{{ numbers }}</h1>
    <ul>
      <li v-for="n in numbers">{{ n }}</li>
    </ul>
    <product-list/>
  </div>
</template>

<script>
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    'product-list': ProductList,
  },
  data: function(){
    return {
      hi: "hi",
      numbers: [ 'one', 'two' ],
    }
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
