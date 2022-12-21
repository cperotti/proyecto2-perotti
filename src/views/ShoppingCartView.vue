<template>
  <section class="section-detail shop-container">
    <header-component />
    <div class="container d-grid gap-3">
          <h3 class="p-3">Carrito de compras</h3>
      <div class="row">
        <div class="col-9">
          <shopping-cart-component />
        </div>
        <shopping-cart-resume-component />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ShoppingCartResumeComponent from '@/components/ShoppingCartResumeComponent.vue'

export default {
  name: 'ShoppingCartView',
  components: {
    ShoppingCartComponent,
    HeaderComponent,
    ShoppingCartResumeComponent,
  },
  data() {
    return {
      dataProductos:[]
    }
  },
}
</script>

<style scoped>
  .shop-container{
    min-height: 100vh;
  }
</style>