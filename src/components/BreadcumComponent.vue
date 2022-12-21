<template>
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/home">Productos</router-link></li>
        <li class="breadcrumb-item"><router-link :to="`/productos/${this.$route.params.producto}`">{{this.$route.params.producto}}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{detalleProducto.name}}</li>
      </ol>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
    name: 'BreadcumComponent',
    data() {
        return {
            detalleProducto:{}
        }
    },
    created(){
        const URLGET = `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${this.$route.params.id}`
        axios.get(URLGET).then((response)=>{
            console.log(response)
            this.detalleProducto = {...response.data}
        })
    },
}
</script>
