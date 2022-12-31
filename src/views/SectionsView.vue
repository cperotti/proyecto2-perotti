<template>
  <section class="section-detail">
        <header-component />
        <div class="container pt-3">
          <h3>Listado productos</h3>
      <div class="row justify-content-end">
        <div class="col-2 p-3">
          <input class="form-control" type="search" placeholder="Buscar" aria-label="Search">
        </div>
      </div>
          <div class="container">
          <list-sections />
          </div>
        </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListSections from '@/components/ListSections.vue';

export default {
  name: 'SectionsView',
  components: {
    HeaderComponent,
    ListSections,
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