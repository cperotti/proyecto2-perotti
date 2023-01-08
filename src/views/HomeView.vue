<template>
    <section class="section-detail">
       <header-component/>
       <!-- <div v-if="getUserLogged.isAdmin" class="container home-container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <cards-modules v-for="(mod) in moduleList" :key="mod.id" :modulo="mod" />
        </div>
       </div> -->
       <div class="container home-container">
        <h1 class="text-center mb-0 pb-3">Bienvenid@ {{getUserLogged.firstName}} 👋</h1>
       </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
// import CardsModules from '@/components/CardsModules.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
    // CardsModules,
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters('userModule',['getUserLogged'])
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