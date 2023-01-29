<template>
  <section class="section-detail">
    <header-component />
    <div class="container d-grid gap-3">
      <breadcum-component :breadcumData="breadcumData" :name="getProductDetail.name" />
      <detail-component />
    </div>
  </section>
</template>

<script>
import DetailComponent from '@/components/DetailComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BreadcumComponent from '@/components/BreadcumComponent.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'DetailView',
  components: {
    DetailComponent,
    HeaderComponent,
    BreadcumComponent
  },
  data() {
    return {
      breadcumData:[
        {
          name:'Productos',
          link:'/productos'
        },
        {
          name:this.$route.params.producto,
          link:`/productos/${this.$route.params.producto}`
        },
      ]
    }
  },
  computed:{
    ...mapGetters('productModule',['getProductDetail'])
  }
}
</script>

<style scoped>
  .section-detail{
  padding: 56px;
  width: 100%;
  height: 100%;
}
</style>