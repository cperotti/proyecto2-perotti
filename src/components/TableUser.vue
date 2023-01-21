<template>
  <table class="table table-light table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Administrador</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user) in getUsersList" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.firstName}}</td>
                    <td>{{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.isAdmin}}</td>
                </tr>
            </tbody>
        </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'TableUser',
    created(){
        this.fetchUsersList()
    },
    computed:{
        ...mapGetters('userModule',['getUsersList']),
    },
    methods:{
        ...mapActions('userModule',['fetchUsersList']),
    }
}
</script>

<style>

</style>