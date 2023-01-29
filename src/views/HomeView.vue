<template>
    <section class="section-detail">
       <header-component/>
       <div class="container">
        <welcome-text />
        <card-sale v-if="!getUserLogged.isAdmin" />
        <h4 class="text-center pb-3">Estos son nuestros 3 productos mas vendidos!</h4>
        <list-component />
       </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import WelcomeText from '@/components/WelcomeText.vue';
import CardSale from '@/components/CardSale.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
    ListComponent,
    WelcomeText,
    CardSale,
  },
  computed:{
    ...mapGetters('userModule',['getUserLogged'])
  },
}
</script>

<style scoped>
.section-detail{
   padding: 56px;
  width: 100%;
  height: 100%;
}
</style>