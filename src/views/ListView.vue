<template>
  <section class="section-detail">
        <header-component />
        <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/home">Productos</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{this.$route.params.producto}}</li>
      </ol>
    </nav>
        <div class="container d-grid gap-3">
        <list-component />
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ListComponent from '@/components/ListComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'ListView',
  components: {
    ListComponent,
    HeaderComponent
  },
}
</script>