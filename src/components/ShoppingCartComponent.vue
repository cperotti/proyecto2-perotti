<template>
    <div class="p-3">
        <table v-if="getShoppingCartList.length > 0" class="table table-light table-bordered">
            <thead>
                <tr>
                    <th>Identificación</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in getShoppingCartList" :key="index">
                    <td>{{producto.id}}</td>
                    <td>{{producto.name}}</td>
                    <td>${{producto.price}}</td>
                    <td><button @click="decrementar(producto.id)" :disabled="producto.cant === 1" type="button" class="btn btn-success me-2">-</button>{{producto.cant}}<button @click="incrementar(producto.id)" class="btn btn-success ms-2" type="button">+</button></td>
                    <td>
                        <div @click="saveId(producto.id)" data-bs-toggle="modal" data-bs-target="#modalEliminar" class="d-flex justify-content-center contenedor-icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                    </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else class="card">
            <div class="card-body">
            <div class="card-text">
                <div>
                    <p>No tenes productos agregados al carrito. Para hacerlo, debes dirigirte a la sección Productos</p>
                </div>
                <button @click="irAProductos" type="button" class="btn btn-link">Ir a productos</button>
            </div>
            </div>
        </div>
        <modal-eliminar :eliminarItem="eliminarItemCarrito" :dataModal="dataModal" />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ModalEliminar from './ModalEliminar.vue';
export default {
    name:'ShoppingCartComponent',
    components:{
        ModalEliminar,
    },
    data() {
        return {
            productId:null,
            dataModal:{
                title:'Quitar producto',
                body:'Estás seguro que deseas quitar este producto del carrito?',
                buttonName:'Quitar'
            }
        }
    },
    computed:{
        ...mapGetters('shoppingCartModule',['getShoppingCartList']),
    },
    methods:{
        ...mapMutations('shoppingCartModule',['deleteShoppingCartItem']),
        saveId(id){
            this.productId=id
        },
        eliminarItemCarrito(){
            this.deleteShoppingCartItem(this.productId)
            this.$emit('enviarDatosAlertCart', {message: 'Acabas de quitar un elemento del carrito con éxito!', showSuccessAlert:true, showDangerAlert:false})
            setTimeout(() => {
                this.$emit('enviarDatosAlertCart', {message: '', showSuccessAlert:false, showDangerAlert:false})
                Object.assign(this.$data, this.$options.data())
                }, 3000);
        },
        decrementar(id){
            this.getShoppingCartList.map((el) => {
                if(el.id === id){
                    let cant  = el.cant--
                    return{
                        ...el,
                        ...(el.cant > 1 && {cant})
                    }
                }
                return el
        })
        },
        incrementar(id){
            this.getShoppingCartList.map((el) => {
                if(el.id === id){
                    let cant = el.cant++
                    return{
                        ...el,
                        cant,
                    }
                }
                return el
            })

        },
        irAProductos(){
            this.$router.push('/productos')
        }
    }
}
</script>

<style scope>
.contenedor-icono svg{
    width: 20px;
    height: 20px;
}
</style>