<template>
  <section class="section-detail">
        <header-component />
        <div class="container">
          <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/productos">Productos</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{this.$route.params.producto}}</li>
        </ol>
      </nav>
      <div class="row justify-content-end">
        <div class="col-2 pb-3">
          <search-component @enviarElementoBuscado="elementoABuscar=$event" />
        </div>
      </div>
          <div class="container">
          <list-component :elementoABuscar="elementoABuscar" />
          </div>
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ListComponent from '@/components/ListComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'ListView',
  components: {
    ListComponent,
    HeaderComponent,
    SearchComponent
  },
  data() {
    return {
      elementoABuscar:''
    }
  },
}
</script>

<style scoped>
.section-detail{
  width: 100%;
  height: 100%;
  padding-bottom: 24px;
}
</style>