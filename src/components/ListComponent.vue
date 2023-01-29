<template>
    <div>
        <div v-if="datosAlert.showSuccessAlert" class="alert alert-success" role="alert">
          {{datosAlert.message}}
        </div>
        <div>
            <div v-if="productsList.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
                <card-component v-for="(producto) in productsList" :key="producto.id" :producto="producto" @enviarDatosAlertCard="datosAlert=$event" />
            </div>
            <div v-else class="d-flex justify-content-center align-items-center p-3">
                No hay datos para mostrar
            </div>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue'
import { mapActions, mapGetters } from 'vuex';


export default {
  components: { CardComponent },
    name: 'ListComponent',
    data() {
        return {
            dataProduct:[],
            datosAlert:{}
        }
    },
    created(){
        this.fetchProductsList()
        this.fetchOrdersList()
    },
    props:{
        elementoABuscar: String,
    },
    computed:{
        ...mapGetters('productModule',['getProductsList']),
        ...mapGetters('ordersModule',['getOrdersList']),
        productsList(){
            if(window.location.pathname.includes('home')){
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

            return this.getProductsList.filter((el)=> el.type === this.$route.params.producto && el.name.toLowerCase().includes(this.elementoABuscar))

        }
    },
    methods:{
        ...mapActions('productModule',['fetchProductsList']),
        ...mapActions('ordersModule',['fetchOrdersList']),
    }
}
</script>

<style scope>
</style>