<template>
    <section class="section-detail">
       <header-component/>
       <div class="container home-container">
        <h1 class="text-center mb-0 pb-3">Bienvenid@ {{getUserLogged.firstName}} 👋</h1>
       </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
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