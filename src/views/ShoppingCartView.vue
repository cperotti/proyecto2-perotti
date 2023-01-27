<template>
  <section class="section-detail">
    <header-component />
    <div class="container d-grid gap-3">
      <h3 class="p-3">Carrito de compras</h3>
      <div v-if="datosAlert.showSuccessAlert" class="alert alert-success" role="alert">
          {{datosAlert.message}}
        </div>
        <div v-if="datosAlert.showDangerAlert" class="alert alert-success" role="alert">
          {{datosAlert.message}}
        </div>
      <div class="row">
        <div class="col-8">
          <shopping-cart-component @enviarDatosAlertCart='datosAlert=$event' />
        </div>
        <div class="col-4 pt-3">
        <shopping-cart-resume-component @enviarDatosAlertResume='datosAlert=$event' />
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
      datosAlert:{}
    }
  },
}
</script>

<style scoped>
  .section-detail{
    padding: 56px;
    width: 100%;
    height: 100%;
  }
</style>