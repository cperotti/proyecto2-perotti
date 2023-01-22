<template>
    <div>
        <div v-if="filterProductsSection.length > 0" class="row row-cols-1 row-cols-md-3 g-4">
            <card-component v-for="(producto) in filterProductsSection" :key="producto.id" :producto="producto" />
        </div>
        <div v-else class="d-flex justify-content-center align-items-center p-3">
            Aun no hay datos para mostrar
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
            dataProduct:[]
        }
    },
    created(){
        this.fetchProductsList()
    },
    props:{
        elementoABuscar: String,
    },
    computed:{
        ...mapGetters('productModule',['getProductsList']),
        filterProductsSection(){
            return this.getProductsList.filter((el)=> el.type === this.$route.params.producto && el.name.toLowerCase().includes(this.elementoABuscar))
        }
    },
    methods:{
        ...mapActions('productModule',['fetchProductsList']),
    }
}
</script>

<style scope>
</style>