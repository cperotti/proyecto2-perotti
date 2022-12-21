<template>
    <div>
        <div v-if="productos.length > 0" class="row justify-content-end">
            <div class="col-2 p-3">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            </div>
        </div>
        <div v-if="productos.length > 0" class="row">
            <card-component v-for="(producto) in productos" :key="producto.id" :producto="producto" />
        </div>
        <div v-else class="d-flex justify-content-center align-items-center p-3">
            Aun no hay datos para mostrar
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
import axios from 'axios';
/*import planta1 from './../assets/planta1.jpg'
import planta2 from './../assets/planta2.jpg'
import planta3 from './../assets/planta3.jpg'*/

export default {
  components: { CardComponent },
    name: 'ListComponent',
    data() {
        return {
            productos: []
        }
    },
    created(){
        const URLGET = "https://639e6cf43542a261305b9ed0.mockapi.io/productos"
        axios.get(URLGET).then((response)=>{
            console.log(response)
            this.productos = response.data.filter((el)=> el.type === this.$route.params.producto)
        })
    },
}
</script>

<style scope>
</style>