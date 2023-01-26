<template>
<div class="tableFixHead">
  <table class="table table-light table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>fecha</th>
                <th>Información suario</th>
                <th>Dirección</th>
                <th>Teléfono</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order) in filterProductsSection" :key="order.id">
                <td>{{order.id}}</td>
                <td>{{order.createdAt | dateFormat(order.createdAt)}}</td>
                <td>{{order.infoUser}}</td>
                <td>{{ order.adress }}</td>
                <td>{{ order.phone }}</td>
                <td>${{ order.total }}</td>
                <td>
                    <div class="contenedor-icono" @click="eliminarPedido(order.id)">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'
export default {
    name: 'TableOrder',
    props:{
        elementoABuscar: String
    },
    created(){
        this.fetchOrdersList().then(()=> console.log('loadiing'))
    },
    computed:{
        ...mapGetters('ordersModule',['getOrdersList']),
        filterProductsSection(){
            return this.getOrdersList.filter((el)=> el.infoUser.toLowerCase().includes(this.elementoABuscar) || el.id.toLowerCase().includes(this.elementoABuscar) )
        }
    },
    methods:{
        ...mapActions('ordersModule',['fetchOrdersList', 'deleteOrder']),
        eliminarPedido(id){
            this.deleteOrder(id)
        },
    },
     filters:{
        dateFormat:(date)=>{
            return moment(date).format('DD/MM/YYYY')
        }
    }
}
</script>

<style scope>
.tableFixHead { overflow: auto; height: 450px; width: 100%; background-color: white; }
.tableFixHead thead th { position: sticky; top: 0; z-index: 1; }
.tableFixHead tbody th { position: sticky; left: 0; }
</style>