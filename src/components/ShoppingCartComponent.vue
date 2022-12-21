<template>
    <div class="p-3">
        <table class="table table-light table-bordered">
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
                <tr v-for="(producto, index) in carrito" :key="index">
                    <td>{{producto.id}}</td>
                    <td>{{producto.name}}</td>
                    <td>${{producto.price}}</td>
                    <td><button @click="decrementar(producto.id)" :disabled="producto.cant === 1" type="button" class="btn btn-success">-</button>{{producto.cant}}<button @click="incrementar(producto.id)" class="btn btn-success" type="button">+</button></td>
                    <td>''</td>
                </tr>
            </tbody>
        </table>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name:'ShoppingCartComponent',
    data() {
        return {
            cant:1,
            carrito:[]
        }
    },
    created(){
        const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
            axios.get(URLGET).then((response)=>{
                this.carrito = [...response.data]
            })
    },
    mounted(){
         this.$emit("enviarDatosProductos", this.carrito)
    },
    methods:{
        calcularPrecio(precio, cantidad){
            precio*cantidad
        },
        decrementar(id){
            this.carrito.map((el) => {
                if(el.id === id){
                    return{
                        ...el,
                        ...(el.cantidad > 1 && {cantidad: el.cantidad--})
                    }
                }
                return el
        })
        },
        incrementar(id){
            this.carrito.map((el) => {
                console.log(el.cantidad)
                if(el.id === id){
                    let cant = el.cantidad++
                    return{
                        ...el,
                        cantidad: cant,
                        precio: el.precio * cant
                    }
                }
                return el
            })

        }
    }
}
</script>

<style scope>

</style>