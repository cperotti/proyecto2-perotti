<template>
  <div class="card mb-3 w-100 h-50">
        <div class="row g-0">
          <div v-if="getUserLogged?.isAdmin" class="d-flex justify-content-end contenedor-icono pt-2 pe-2" data-bs-toggle="modal" data-bs-target="#exampleModalEditDescuentos">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
        </div>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "CardSale",
    created(){
      const userId = localStorage.getItem('userId');
      this.fetchUserDetail(userId)
  },
  computed:{
    ...mapGetters('userModule',['getUserLogged'])
  },
  methods:{
    ...mapActions('userModule', ['fetchUserDetail']),
    irAHerramientas(){
      this.$router.push('/productos/herramientas')
    }
  }
}
</script>

<style scope>

</style>