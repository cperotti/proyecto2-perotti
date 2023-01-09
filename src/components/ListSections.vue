<template>
    <div>
        <table-products v-if="this.$route.params.section === 'productos'"/>
        <table-user v-else-if="this.$route.params.section === 'usuarios'" />
        <table-order v-else/>
    </div>
</template>

<script>
import TableOrder from './TableOrder.vue'
import TableProducts from './TableProducts.vue'
import TableUser from './TableUser.vue'
export default {
  components: { TableOrder, TableProducts, TableUser},
    name:'ListSections',
}
</script>

<style scope>
</style>