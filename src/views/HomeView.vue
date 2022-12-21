<template>
    <section class="section-detail">
        <header-component/>
        <div class="d-flex justify-content-center align-items-center flex-column home-container">
          <h1 class="mb-0 pb-3">Bienvenid@ {{dataUser.firstName}}</h1>
          <div class="row">
            <cards-type-product-component v-for="(type) in listTypeProducts" :key="type.id" :type="type" />
          </div>
          </div>
    </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent.vue'
import CardsTypeProductComponent from '@/components/CardsTypeProductComponent.vue'

export default {
  components: { 
    HeaderComponent,
    CardsTypeProductComponent,
   },
  name: 'HomeView',
  data() {
    return {
      dataUser:{},
      listTypeProducts:[
        {
          id: 'plantas',
          name: 'Plantas'
        },
         {
          id: 'semillas',
          name: 'Semillas'
        },
         {
          id: 'herramientas',
          name: 'Herramientas'
        }
      ]
    }
  },
  created(){
    const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/usuarios'
      axios.get(URLGET).then((response)=>{
          this.dataUser = {...response.data.find((user)=> user.id === localStorage.getItem('user'))}
      })
  },
  methods:{
    logOut(){
        this.$router.push('/')
    },
  }
}
</script>

<style scoped>
.home-container{
  width: 100%;
  height: 90vh;
}
</style>