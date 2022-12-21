<template>
  <section class="section-detail">
    <header-component />
    <breadcum-component/>
    <div class="container d-grid gap-3">
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
  
</style>