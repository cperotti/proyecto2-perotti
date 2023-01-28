<template>
    <div class="container gap-3 d-flex justify-content-center align-items-center flex-column container-login">
    <div v-if="showDangerAlert" class="alert alert-danger w-50" role="alert">
        No encontramos información que coincida con la que ingresaste. Puede que el mail o la contraseña estén mal escritos. Por favor volvé a intentarlo.
    </div>
    <div class="card" style="min-width: 25rem;">
        <div class="card-header d-flex justify-content-center">
        Iniciar sesión
        </div>
        <div class="card-body">
            <form @submit.prevent="validarLogin">
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email</label>
                    <input v-model="email" placeholder="Ingresa tu email" type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp">
                    <p v-if="errors.email" class="card-text"><small class="text-danger">{{errors.email}}</small></p>
                </div>
                <div class="mb-3">
                    <label for="loginContrasena" class="form-label">Contraseña</label>
                    <input v-model="password" placeholder="Ingresa tu contraseña" type="password" class="form-control" id="loginContrasena">
                    <p v-if="errors.password" class="card-text"><small class="text-danger c">{{errors.password}}</small></p>
                </div>
                <div class="d-flex justify-content-start">
                    <div><span>Aún no tenes una cuenta?</span><button @click="irARegistraro" type="button" class="btn btn-link">Registrarte</button></div>
                </div>
                <div class="d-flex justify-content-end">
                <button :disabled="showDangerAlert" type="submit" class="btn btn-success">Ingresar</button>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'LoginComponent',
    data() {
        return {
            email:'',
            password:'',
            errors:{
                email:'',
                password:''
            },
            showDangerAlert:false
        }
    },
    watch:{
        email(nuevo){
            if(nuevo && this.errors.email){
                this.errors = {...this.errors, email:''} 
            }
        },
        password(nuevo){
            if(nuevo && this.errors.password){
                this.errors = {...this.errors, password:''} 
            }
        }
    },
    created(){
        this.fetchUsersList()
    },
    methods:{
        ...mapActions('userModule',['fetchUsersList']),
        ...mapGetters('userModule',['getUsersList']),
        validarLogin(){
            if(this.email && this.password){
                    const dataUser = this.getUsersList().find((user)=> user.email === this.email && user.password === this.password)
                    if(dataUser){
                        this.$router.push('/home')
                        localStorage.setItem('userId',dataUser.id)
                    }else{
                        this.showDangerAlert=true
                        setTimeout(() => {
                            Object.assign(this.$data, this.$options.data())
                        }, 5000);
                    }   
            }
            
            if(!this.email){
                this.errors = {...this.errors, email:'Debes colocar un email para poder ingresar'} 
            }

            if(!this.password){
                this.errors = {...this.errors, password:'Debes colocar una contraseña para poder ingresar'} 
            }
        },
        irARegistraro(){
            this.$router.push('/registro')
        }
    }
}
</script>

<style scope>
.container-login{
    width: 100%;
    height: 100%;
}
</style>