<template>
  <section class="section-detail">
        <header-component />
        <div class="container">
          <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/secciones">Secciones</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{this.$route.params.section}}</li>
        </ol>
      </nav>
      <div class="row justify-content-end pb-3">
        <div class="col-2">
          <input class="form-control" type="search" placeholder="Buscar" aria-label="Search">
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalAdd">Agregar nuevo</button>
        </div>
      </div>
          <div class="container">
          <list-sections />
          </div>
            <pueba-modal />
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ListSections from '@/components/ListSections.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import PuebaModal from '@/components/PuebaModal.vue'

export default {
  name: 'ListView',
  components: {
    ListSections,
    HeaderComponent,
    PuebaModal,
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