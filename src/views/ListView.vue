<template>
  <section class="section-detail">
        <header-component />
        <div class="container">
          <breadcum-component :breadcumData="breadcumData" :name="this.$route.params.producto" />
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
import BreadcumComponent from '@/components/BreadcumComponent.vue'

export default {
  name: 'ListView',
  components: {
    ListComponent,
    HeaderComponent,
    SearchComponent,
    BreadcumComponent
  },
  data() {
    return {
      elementoABuscar:'',
      breadcumData:[
        {
          name: 'Productos',
          link: '/productos'
        }
      ]
    }
  },
}
</script>

<style scoped>
.section-detail{
  padding: 56px ;
  width: 100%;
  height: 100%;
}
</style>