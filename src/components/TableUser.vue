<template>
    <div class="stickyHeader">
        <table class="table table-light table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Administrador</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user) in filterProductsSection" :key="user.id">
                    <td>{{user.id}}</td>
                    <td><img class="imagen-user" :src="user.avatar" alt="foto usuario"></td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.isAdmin ? 'Si' :'No'}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'TableUser',
    props:{
        elementoABuscar: String
    },
    created(){
        this.fetchUsersList()
    },
    computed:{
        ...mapGetters('userModule',['getUsersList']),
        filterProductsSection(){
            return this.getUsersList.filter((el)=> el.firstName.toLowerCase().includes(this.elementoABuscar) || el.firstName.toLowerCase().includes(this.elementoABuscar) || el.id.toLowerCase().includes(this.elementoABuscar) || el.email.toLowerCase().includes(this.elementoABuscar) )
        },
    },
    methods:{
        ...mapActions('userModule',['fetchUsersList']),
    }
}
</script>

<style scope>
.imagen-user{
    height: 39px;
    border-radius: 50%;
    border: 2px solid darkseagreen
}
.stickyHeader { 
    overflow: auto; 
    height: 400px; 
    width: 100%;
}
.stickyHeader thead th { 
    position: sticky; 
    top: 0; 
    z-index: 1; 
}
.stickyHeader tbody th { 
    position: sticky; 
    left: 0; 
}
</style>