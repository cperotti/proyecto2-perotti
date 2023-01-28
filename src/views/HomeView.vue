<template>
    <section class="section-detail">
       <header-component/>
       <div class="container">
        <h1 class="text-center p-3">Bienvenid@ {{getUserLogged.firstName}} 👋</h1>
        <div class="card mb-3 w-100 h-50">
        <div class="row g-0">
          <div class="col-md-6 d-flex justify-content-center align-items-center flex-column p-3">
              <h3 class="text-center">Descuentos</h3>
             <h1 class="text-center">🌳GardenSHOP🌳</h1>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="card-body">
              <div>
                <p class="card-text">
                  Todos los viernes, <strong>35%</strong> de descuento comprando más de 3 productos de la variedad <button @click="irAHerramientas" type="button" class="btn btn-link p-0">herramientas</button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <h4 class="text-center pb-3">Estos son nuestros 3 productos mas vendidos!</h4>
        <list-home />
       </div>
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
  },
  methods:{
    irAHerramientas(){
      this.$router.push('/productos/herramientas')
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
</style>