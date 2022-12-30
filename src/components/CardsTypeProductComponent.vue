<template>
<div class="col">
    <div @click="irAProducto(type.id)" class="card h-100">
      <img src="https://previews.123rf.com/images/olyaperpetuummobile/olyaperpetuummobile1712/olyaperpetuummobile171200002/90834622-monochrome-funny-garden-seamless-pattern-dark-green-color-outline-on-white-background-cartoon-doodle.jpg" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title text-center">{{type.name}}</h5>
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
div.card:hover{
  cursor: pointer;
}
</style>