<template>
  <section class="section-detail">
    <header-component />
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/home">Productos</router-link></li>
        <li class="breadcrumb-item"><router-link :to="`/productos/${this.$route.params.producto}`">{{this.$route.params.producto}}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">nombrePlanta</li>
      </ol>
    </nav>
    <div class="container d-grid gap-3">
      <detail-component />
    </div>
  </section>
</template>

<script>
import DetailComponent from '@/components/DetailComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
// @ is an alias to /src

export default {
  name: 'DetailView',
  components: {
    DetailComponent,
    HeaderComponent
  },
}
</script>

<style scoped>
  
</style>