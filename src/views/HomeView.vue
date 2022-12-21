<template>
    <section class="section-detail">
        <header-component/>
        <div class="d-flex justify-content-center align-items-center flex-column home-container">
          <h1 class="mb-0 pb-3">Bienvenid@ {{dataUser.firstName}}</h1>
          <div class="row">
            <div class="col p-3">
            <div @click="irAProducto('plantas')" class="card border-success card-style">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h3 class="card-title">Plantas</h3>
                </div>
            </div>
          </div>
          <div class="col p-3">
            <div @click="irAProducto('semillas')" class="card border-success card-style">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h3 class="card-title">Semillas</h3>
                </div>
            </div>
          </div>
          <div class="col p-3">
            <div @click="irAProducto('herramientas')" class="card border-success card-style">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h3 class="card-title">Herramientas</h3>
                </div>
            </div>
          </div>
          </div>
          </div>
    </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent.vue'
// @ is an alias to /src

export default {
  components: { HeaderComponent },
  name: 'HomeView',
  data() {
    return {
      dataUser:{}
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
    irAProducto(prod){
      this.$router.push(`/productos/${prod}`)
    }
  }
}
</script>

<style scoped>
.home-container{
  width: 100%;
  height: 90vh;
}
.card-style{
  width: 20rem; 
  height: 25rem;
}
div.card:hover{
  cursor: pointer;
}
</style>