<template>
    <div>
        <div v-if="getOrdersList.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
            <card-component v-for="(producto) in getTop3" :key="producto.id" :producto="producto" />
        </div>
        <div v-else class="d-flex justify-content-center align-items-center p-3">
            No hay datos para mostrar
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
import { mapActions, mapGetters } from 'vuex';


export default {
  components: { CardComponent },
    name: 'ListHome',
    created(){
        this.fetchProductsList()
        this.fetchOrdersList()
    },
    computed:{
        ...mapGetters('ordersModule',['getOrdersList']),
        ...mapGetters('productModule',['getProductsList']),
        getTop3(){
           this.getOrdersList.forEach(element => {
                //let objeto = {}
                console.log('element',element.id)
                element.order.map((order)=>{
                    console.log('order',order.id)
                })
            });

            return[]
        }
    },
    methods:{
        ...mapActions('ordersModule',['fetchOrdersList']),
        ...mapActions('productModule',['fetchProductsList'])

    }
}
</script>

<style scope>
</style>