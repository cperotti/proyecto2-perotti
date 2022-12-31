<template>
  <div class="col">
    <div @click="irASeccion" class="card h-100">
      <img :src="modulo.image" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title text-center">{{modulo.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'CardsModules',
    props:{
        modulo: Object
    },
    methods:{
        irASeccion(){
            this.$router.push(`/secciones`)
        }
    }
}
</script>

<style scope>
div.card:hover{
  cursor: pointer;
}
</style>