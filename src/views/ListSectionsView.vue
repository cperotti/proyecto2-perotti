<template>
  <section class="section-detail">
        <header-component />
        <div class="container">
          <breadcum-component :breadcumData="breadcumData" :name="this.$route.params.section" />
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
            <modal-agregar-nuevo @enviarDatosAlertNuevoProducto="datosAlert=$event"/>
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import ListSections from '@/components/ListSections.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ModalAgregarNuevo from '@/components/ModalAgregarNuevo.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import BreadcumComponent from '@/components/BreadcumComponent.vue'

export default {
  name: 'ListView',
  components: {
    ListSections,
    HeaderComponent,
    ModalAgregarNuevo,
    SearchComponent,
    BreadcumComponent,
  },
  data() {
    return {
      elementoABuscar:'',
      datosAlert:{},
      breadcumData:[
        {
          name: 'Secciones',
          link: '/secciones'
        }
      ]
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