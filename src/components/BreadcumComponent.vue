<template>
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/productos">Productos</router-link></li>
        <li class="breadcrumb-item"><router-link :to="`/productos/${this.$route.params.producto}`">{{this.$route.params.producto}}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{getProductDetail.name}}</li>
      </ol>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'BreadcumComponent',
    created(){
        this.fetchProductDetail(this.$route.params.id)
    },
    computed:{
        ...mapGetters('productModule',['getProductDetail'])
    },
    methods:{
    ...mapActions('productModule',['fetchProductDetail'])
    }
}
</script>
