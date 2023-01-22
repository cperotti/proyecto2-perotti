<template>
  <section class="section-detail">
    <header-component />
    <div class="container d-grid gap-3">
      <breadcum-component/>
      <detail-component />
    </div>
  </section>
</template>

<script>
import DetailComponent from '@/components/DetailComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BreadcumComponent from '@/components/BreadcumComponent.vue'

export default {
  name: 'DetailView',
  components: {
    DetailComponent,
    HeaderComponent,
    BreadcumComponent
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