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
            let objeto={}
            this.getOrdersList.forEach(element => {
                element.order.map((order)=>{
                    if(Object.keys(objeto).length === 0){
                        objeto={[order.id]:order.cant}
                    }else{
                        if(Object.keys(objeto).includes(order.id.toString())){
                            objeto={...objeto, [order.id]: objeto[order.id]+order.cant}
                        }

                        if(!Object.keys(objeto).includes(order.id.toString())){
                            objeto = {...objeto, [order.id]:order.cant}
                        }
                    }
                })
            });
            let max1 = 0
            let elemento1 = null
            let max2 = 0
            let elemento2 = null
            let max3 = 0
            let elemento3 = null
            Object.keys(objeto).forEach((el)=>{
                if(objeto[el] > max1){
                    max1 = objeto[el]
                    elemento1 = el
                }else if (objeto[el] > max2) {
                    max2= objeto[el]
                    elemento2 = el
                }else if (objeto[el] > max3) {
                    max3= objeto[el]
                    elemento3 = el
                }
            })
            return this.getProductsList.filter((el)=> el.id === elemento1 || el.id === elemento2 || el.id === elemento3)
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