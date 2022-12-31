<template>
    <section class="section-detail">
       <header-component/>
       <div v-if="getUserLogged.isAdmin" class="container home-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <cards-modules v-for="(mod) in moduleList" :key="mod.id" :modulo="mod" />
        </div>
       </div>
       <div v-else class="container home-container">
        <h1 class="text-center mb-0 pb-3">Bienvenid@ {{getUserLogged.firstName}} 👋</h1>
       </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CardsModules from '@/components/CardsModules.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
    CardsModules,
  },
  data(){
    return{
      moduleList:[
        {
          id:'productos',
          name:'Productos',
          image:'https://media.istockphoto.com/id/1278831220/es/vector/mano-sosteniendo-el-icono-de-la-l%C3%ADnea-de-suelo-la-palma-humana-tiene-una-planta.jpg?s=170667a&w=0&k=20&c=LFKeGtSVScj5jB4bLBdws9rSzf_dzJ31BKLU_0-DGAk='
        },
        {
          id:'pedidos',
          name:'Pedidos',
          image: 'https://thumbs.dreamstime.com/b/icono-de-cuadro-producto-pedido-lista-comprobaci%C3%B3n-elemento-del-compra-en-l%C3%ADnea-sobre-fondo-blanco-188777308.jpg'
        },
        {
          id:'usuarios',
          name:'Usuarios',
          image:'https://thumbs.dreamstime.com/b/icono-de-los-usuarios-puede-ser-utilizado-para-la-web-logotipo-app-m%C3%B3vil-ui-ux-134709854.jpg'
        }
      ]
    }
  },
  computed:{
    ...mapGetters(['getUserLogged'])
  }
}
</script>

<style scoped>
.section-detail{
  width: 100%;
  height: 100%;
}
.home-container{
  padding: 24px;
}
</style>