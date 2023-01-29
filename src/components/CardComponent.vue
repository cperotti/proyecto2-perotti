<template>
    <div class="col">
        <div class="card h-70">
            <img :src="producto.image" class="card-img-top imagen" alt="img">
            <div class="card-body">
                <h5 class="card-title">{{producto.name}}</h5>
                <p class="card-text">Precio ${{producto.price}}</p>
                <div v-if="!getUserLogged?.isAdmin" class="d-flex justify-content-between">
                <button @click="irADetalle(producto.id, producto.type)" type="button" class="btn btn-outline-success">Ver detalle</button>
                <button @click="irAlCarrito(producto)" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
                <div v-else class="d-flex justify-content-end">
                    <button @click="irADetalle(producto.id, producto.type)" type="button" class="btn btn-success">Ver detalle</button>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    name:'CardComponent',
    props:{
        producto: Object,
    },
    created(){
        const userId = localStorage.getItem('userId');
        this.fetchUserDetail(userId)
    },
    computed:{
        ...mapGetters('userModule',['getUserLogged']),
    },
    methods:{
    ...mapMutations('shoppingCartModule',['addShoppingCartItem']),
    ...mapActions('userModule', ['fetchUserDetail']),
        irADetalle(id, type){
            const auxParam = Object.keys(this.$route.params).length === 0 ? type : this.$route.params.producto
            this.$router.push(`/productos/${auxParam}/${id}`)
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