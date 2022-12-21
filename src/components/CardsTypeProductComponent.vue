<template>
  <div class="col p-3">
        <div @click="irAProducto(type.id)" class="card border-success card-style">
            <div class="card-body d-flex justify-content-center align-items-center">
                <h3 class="card-title">{{type.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'CardsTypeProductComponent',
    props:{
        type: Object,
    },
    methods:{
        irAProducto(prod){
            this.$router.push(`/productos/${prod}`)
        }
    }
}
</script>

<style scope>
.card-style{
  width: 20rem; 
  height: 25rem;
}
div.card:hover{
  cursor: pointer;
}
</style>