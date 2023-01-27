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
      <div v-if="datosAlert.showSuccessAlert" class="alert alert-success" role="alert">
            {{datosAlert.message}}
        </div>
        <div v-if="datosAlert.showDangerAlert" class="alert alert-danger" role="alert">
           {{datosAlert.message}}
        </div>
      <div class="row justify-content-end pb-3">
        <div class="col-2">
          <search-component @enviarElementoBuscado="elementoABuscar=$event"/>
        </div>
        <div v-if="this.$route.params.section==='productos'" class="col-2">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModalAdd">Agregar nuevo</button>
        </div>
      </div>
          <div class="container">
          <list-sections :elementoABuscar="elementoABuscar" />
          </div>
            <pueba-modal @enviarDatosAlertNuevoProducto="datosAlert=$event"/>
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ListSections from '@/components/ListSections.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import PuebaModal from '@/components/PuebaModal.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'ListView',
  components: {
    ListSections,
    HeaderComponent,
    PuebaModal,
    SearchComponent,
  },
  data() {
    return {
      elementoABuscar:'',
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