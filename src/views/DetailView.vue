<template>
  <section class="section-detail">
    <header-component />
    <div class="container d-grid gap-3">
      <breadcum-component v-if="!getUserLogged?.isAdmin" :breadcumData="breadcumData" :name="getProductDetail.name" />
      <div v-else class="d-flex justify-content-start">
        <button @click="irAHome" type="button" class="btn btn-link link-dark">Volver al home</button>
      </div>
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
    ...mapGetters('productModule',['getProductDetail']),
    ...mapGetters('userModule', ['getUserLogged'])
  },
  methods:{
    irAHome(){
      this.$router.push('/home')
    },
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