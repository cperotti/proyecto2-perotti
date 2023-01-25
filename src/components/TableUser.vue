<template>
<div>
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
            <div class="d-flex justify-content-end">
                <nav class="p-0" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li @click="getPreviousPage()" class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li @click="getDataPagina(pagina)" v-for="(pagina, index) in totalPaginas()" :key="index" class="page-item" :class="isActive(pagina)"><a class="page-link" href="#">{{pagina}}</a></li>
                        <li @click="getNextPage()" class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'TableUser',
    props:{
        elementoABuscar: String
    },
    data() {
        return {
            elementosPorPagina:10,
            datosPaginados:[],
            paginaActual:1,
        }
    },
    created(){
        this.fetchUsersList()
    },
    mounted(){
        this.getDataPagina(1)
    },
    computed:{
        ...mapGetters('userModule',['getUsersList']),
        filterProductsSection(){
            if(this.elementoABuscar){
                return this.getUsersList.filter((el)=> el.firstName.toLowerCase().includes(this.elementoABuscar) || el.firstName.toLowerCase().includes(this.elementoABuscar) || el.id.toLowerCase().includes(this.elementoABuscar) || el.email.toLowerCase().includes(this.elementoABuscar) )
            }
            return this.datosPaginados.filter((el)=> el.firstName.toLowerCase().includes(this.elementoABuscar) || el.firstName.toLowerCase().includes(this.elementoABuscar) || el.id.toLowerCase().includes(this.elementoABuscar) || el.email.toLowerCase().includes(this.elementoABuscar) )
        }
    },
    methods:{
        ...mapActions('userModule',['fetchUsersList']),
        totalPaginas(){
            return Math.ceil(this.getUsersList.length / this.elementosPorPagina)
        },
        getDataPagina(nroPagina){
            this.paginaActual = nroPagina
            this.datosPaginados = []
            let ini = (nroPagina*this.elementosPorPagina) - this.elementosPorPagina
            let fin = (nroPagina*this.elementosPorPagina)

           this.datosPaginados = this.getUsersList.slice(ini, fin)
        },
        getPreviousPage(){
            if(this.paginaActual >1){
                this.paginaActual--
            }
            this.getDataPagina(this.paginaActual)
        },
        getNextPage(){
            if(this.paginaActual < this.totalPaginas()){
                this.paginaActual++
            }
            this.getDataPagina(this.paginaActual)
        },
        isActive(nroPagina){
            if(nroPagina === this.paginaActual){
                return 'active'
            }else{
                ''
            }
        }
    }
}
</script>

<style scope>
.imagen-user{
    height: 39px;
    border-radius: 50%;
    border: 2px solid darkseagreen
}
</style>