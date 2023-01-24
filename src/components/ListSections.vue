<template>
    <div>
        <table-products v-if="this.$route.params.section === 'productos'" :elementoABuscar="elementoABuscar" />
        <table-user v-else-if="this.$route.params.section === 'usuarios'" :elementoABuscar="elementoABuscar" />
        <table-order v-else :elementoABuscar="elementoABuscar" />
    </div>
</template>

<script>
import TableOrder from './TableOrder.vue'
import TableProducts from './TableProducts.vue'
import TableUser from './TableUser.vue'
export default {
    name:'ListSections',
    components: { TableOrder, TableProducts, TableUser},
    props:{
        elementoABuscar: String
    }
}
</script>

<style scope>
</style>