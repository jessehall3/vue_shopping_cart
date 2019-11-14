<template>
  <div class="">
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      products: [{
        name: "apple",
        price: "20"
      }]
    }
  },
  // created: function(){
  //   const self = this
  //   shop.getProducts(products => {
  //     self.products = products
  //   })
  // }
}
</script>
