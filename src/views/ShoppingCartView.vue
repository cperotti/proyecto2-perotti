<template>
  <section class="section-detail">
    <header-component />
    <div class="container d-grid gap-3">
          <h3 class="p-3">Carrito de compras</h3>
      <div class="row">
        <div class="col-8">
          <shopping-cart-component />
        </div>
        <div class="col-4 pt-3">
        <shopping-cart-resume-component />
        </div>
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
  .section-detail{
    width: 100%;
    height: 100%;
  }
</style>