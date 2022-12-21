<template>
  <section class="section-detail shop-container">
    <header-component />
    <div class="container d-grid gap-3">
          <h3 class="p-3">Carrito de compras</h3>
      <div class="row">
        <div class="col-9">
          <shopping-cart-component @enviarDatosProductos="[...dataProductos, ...$event]" />
        </div>
        <div class="card col-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Resumen de compra</h5>
            <div class="card-text">
              <p v-for="(producto, index) in dataProductos" :key="index">{{producto.name}}</p>
            </div>
            <button type="button" class="btn btn-success">Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ShoppingCartComponent from '@/components/ShoppingCartComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'ShoppingCartView',
  components: {
    ShoppingCartComponent,
    HeaderComponent
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