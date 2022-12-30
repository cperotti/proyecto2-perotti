<template>
    <section class="section-detail">
       <header-component/>
       <div class="container home-container">
        <h1 class="text-center mb-0 pb-3">Bienvenid@ {{dataUser.firstName}}👋</h1>
       </div>
    </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components:{
    HeaderComponent,
  },
  data() {
    return {
      dataUser:{},
    }
  },
  created(){
    const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/usuarios'
      axios.get(URLGET).then((response)=>{
          this.dataUser = {...response.data.find((user)=> user.id === localStorage.getItem('user'))}
      })
  },
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