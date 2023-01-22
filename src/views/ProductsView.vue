<template>
<section class="section-detail">
    <header-component/>
    <div class="container">
    <div class="d-flex justify-content-center align-items-center flex-column products-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <cards-type-product-component v-for="(type) in listTypeProducts" :key="type.id" :type="type" />
</div>
    </div>
    </div>
</section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardsTypeProductComponent from '@/components/CardsTypeProductComponent.vue'

export default {
  components: { 
    HeaderComponent,
    CardsTypeProductComponent,
   },
  name: 'ProductsView',

  data(){
    return{
        listTypeProducts:[
    {
        id:'plantas',
        name:'Plantas'
    },
    {
        id:'semillas',
        name:'Semillas'
    },
    {
        id:'herramientas',
        name:'Herramientas'
    }
  ]
    }
  }
}
</script>

<style scoped>
.section-detail{
  padding: 56px;
  width: 100%;
  height: 100%;
}
.products-container{
    padding: 59px 30px;
}
div.card:hover{
  cursor: pointer;
}
</style>