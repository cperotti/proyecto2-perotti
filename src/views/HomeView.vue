<template>
    <section class="section-detail">
       <header-component/>
       <div class="container">
        <welcome-text />
        <card-sale />
        <h4 class="text-center pb-3">Estos son nuestros 3 productos mas vendidos!</h4>
        <list-home />
       </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import ListHome from '@/components/ListHome.vue';
import WelcomeText from '@/components/WelcomeText.vue';
import CardSale from '@/components/CardSale.vue';

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
    ListHome,
    WelcomeText,
    CardSale,
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