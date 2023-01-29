<template>
  <section class="section-detail">
      <header-component/>
      <div class="container">
        <div class="d-flex justify-content-center align-items-center flex-column products-container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <cards-modules v-for="(mod) in listTypeProducts" :key="mod.id" :modulo="mod" :irAModulo="irAProducto" />
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardsModules from '@/components/CardsModules.vue'

export default {
  components: { 
    HeaderComponent,
    CardsModules,
   },
  name: 'ProductsView',

  data(){
    return{
        listTypeProducts:[
    {
        id:'plantas',
        name:'Plantas',
        image: "https://previews.123rf.com/images/olyaperpetuummobile/olyaperpetuummobile1712/olyaperpetuummobile171200002/90834622-monochrome-funny-garden-seamless-pattern-dark-green-color-outline-on-white-background-cartoon-doodle.jpg"
    },
    {
        id:'semillas',
        name:'Semillas',
        image: "https://previews.123rf.com/images/olyaperpetuummobile/olyaperpetuummobile1712/olyaperpetuummobile171200002/90834622-monochrome-funny-garden-seamless-pattern-dark-green-color-outline-on-white-background-cartoon-doodle.jpg"
    },
    {
        id:'herramientas',
        name:'Herramientas',
        image: "https://previews.123rf.com/images/olyaperpetuummobile/olyaperpetuummobile1712/olyaperpetuummobile171200002/90834622-monochrome-funny-garden-seamless-pattern-dark-green-color-outline-on-white-background-cartoon-doodle.jpg"
    }
  ]
    }
  },
  methods: {
    irAProducto(prod){
      this.$router.push(`/productos/${prod}`)
    }
  },
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