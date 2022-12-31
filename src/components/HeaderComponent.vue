<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light header">
            <div class="container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <h2 class="navbar-brand">🌳GardenSHOP🌳</h2>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="`/home`" class="nav-link" aria-current="page">Home</router-link>
                        </li>
                        <li v-if="!getUserLogged.isAdmin" class="nav-item">
                            <router-link :to="`/productos`" class="nav-link" aria-current="page">Productos</router-link>
                        </li>
                    </ul>
                    <div class="pe-3">
                       ¡Hola {{getUserLogged.firstName}}!
                        <img class="imagen-user" :src="getUserLogged.avatar" alt="foto usuario">
                    </div>
                    <div v-if="!getUserLogged.isAdmin" @click="irAlCarrito" class="pe-4 contenedor-icono">
                        <router-link :to="`/carrito`" class="nav-link" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></router-link>
                    </div>
                    <div>
                        <button @click="logOut" class="btn btn-outline-success" type="button">Cerrar sesión</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'HeaderComponent',
    data() {
        return {
            productos:[
                {
                    id:1,
                    title:'Plantas'
                },
                {
                    id:2,
                    title:'Semillas'
                },
                {
                    id:3,
                    title:'Herramientas'
                }
            ]
        }
    },
    computed:{
        ...mapGetters(['getUserLogged']),
    },
    methods:{
        logOut(){
            this.$router.push('/')
        },
        irAlCarrito(){
            this.$router.push('/carrito')
        }
    }
}
</script>

<style scope>
.header{
    z-index: 2;
}
.contenedor-icono svg{
    width: 30px;
    height: 30px;
}
div.contenedor-icono:hover{
    cursor: pointer;
}
.imagen-user{
    height: 39px;
    border-radius: 50%;
    border: 2px solid darkseagreen
}
</style>