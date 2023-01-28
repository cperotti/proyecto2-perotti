<template>
    <div class="col">
        <div class="card h-70">
            <img :src="producto.image" class="card-img-top imagen" alt="img">
            <div class="card-body">
                <h5 class="card-title">{{producto.name}}</h5>
                <p class="card-text">Precio ${{producto.price}}</p>
                <div class="d-flex justify-content-between">
                <button @click="irADetalle(producto.id)" type="button" class="btn btn-outline-success">Ver detalle</button>
                <button v-if="!getUserLogged.isAdmin" @click="irAlCarrito(producto)" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    name:'CardComponent',
    props:{
        producto: Object,
    },
    computed:{
        ...mapGetters('userModule',['getUserLogged']),
    },
    methods:{
    ...mapMutations('shoppingCartModule',['addShoppingCartItem']),
        irADetalle(id){
            this.$router.push(`/productos/${this.$route.params.producto}/${id}`)
        },
        irAlCarrito(producto){
            const dataItem = {
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    cant: 1,
                }
            this.addShoppingCartItem(dataItem)
            this.$emit('enviarDatosAlertCard', {message: 'Agregaste un producto al carrito', showSuccessAlert:true,})
            setTimeout(() => {
                this.$emit('enviarDatosAlertCard', {message: '', showSuccessAlert:false,})
                Object.assign(this.$data, this.$options.data())
            }, 3000);
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