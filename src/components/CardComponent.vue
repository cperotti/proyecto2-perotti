<template>
    <div class="col p-3">
        <div class="card" style="width: 25rem;">
            <img :src="producto.imagen" class="card-img-top imagen" alt="img">
            <p class="card-text"><small class="text-muted"><a :href="producto.autorLink">Imagen de rawpixel.com</a> en Freepik</small></p>
            <div class="card-body">
                <h5 class="card-title">{{producto.name}}</h5>
                <p class="card-text">Precio ${{producto.price}}</p>
                <div class="d-flex justify-content-between">
                <button @click="irADetalle(producto.id)" type="button" class="btn btn-outline-success">Ver detalle</button>
                <button @click="irAlCarrito" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name:'CardComponent',
    props:{
        producto: Object,
    },
    data() {
        return {
            
        }
    },
    methods:{
        irADetalle(id){
            this.$router.push(`/productos/${this.$route.params.producto}/${id}`)
        },
        irAlCarrito(producto){
            const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
                axios.post(URLPOST,{
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    cant: 1,
                }).then(()=> this.$router.push(`/carrito`))
                .catch((error)=> console.log(error))
        }
    }
}
</script>

<style>
.imagen{
    object-fit: contain;
     width: 100%;
  height: 370px;
}
</style>