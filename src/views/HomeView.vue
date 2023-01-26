<template>
    <section class="section-detail">
       <header-component/>
       <div class="container home-container">
        <h1 class="text-center p-3">Bienvenid@ {{getUserLogged.firstName}} 👋</h1>
       </div>
       <h3>Top 3 productos mas vendidos</h3>
       <list-home />
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListHome from '@/components/ListHome.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
    ListHome,
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
  padding: 56px;
}
</style>