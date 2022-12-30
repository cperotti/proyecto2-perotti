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
                    <td><div @click="eliminarItemCarrito" class="d-flex justify-content-center contenedor-icono">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>
                    </div></td>
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
            carrito:[]
        }
    },
    created(){
        const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
            axios.get(URLGET).then((response)=>{
                this.carrito = [...response.data]
            })
    },
    methods:{
        eliminarItemCarrito(){
            console.log('eliminar item del carrito')
        },
        decrementar(id){
            this.carrito.map((el) => {
                if(el.id === id){
                    return{
                        ...el,
                        ...(el.cant > 1 && {cantidad: el.cant--})
                    }
                }
                return el
        })
        },
        incrementar(id){
            this.carrito.map((el) => {
                if(el.id === id){
                    let cant = el.cant++
                    return{
                        ...el,
                        cant: cant,
                    }
                }
                return el
            })

        }
    }
}
</script>

<style scope>
.contenedor-icono svg{
    width: 10px;
    height: 10px;
}
</style>