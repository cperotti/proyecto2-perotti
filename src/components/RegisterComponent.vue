<template>
    <div class="container gap-3 d-flex justify-content-center align-items-center flex-column container-register">
        <div v-if="showSuccessAlert" class="alert alert-success" role="alert">
           El registro se realizó correctamente. Redirigiendo a Login..
        </div>
        <div v-if="showDangerAlert" class="alert alert-danger" role="alert">
           No se ha podido realizar el registro. Por favor volvé a intentarlo
        </div>
    <div class="card" style="min-width: 30rem;">
        <div class="card-header d-flex justify-content-center">
        Registro
        </div>
        <div class="card-body">
            <form @submit.prevent="validarRegistro">
                <div class="mb-3">
                    <label for="firstName" class="form-label">Nombre</label>
                    <input v-model="firstName" placeholder="Ingresa tu nombre" type="text" class="form-control" id="firstName" aria-describedby="emailHelp">
                    <p v-if="errorsRegistro.firstName" class="card-text"><small class="text-danger">{{errorsRegistro.firstName}}</small></p>
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Apellido</label>
                    <input v-model="lastName" placeholder="Ingresa tu apellido" type="text" class="form-control" id="lastName">
                    <p v-if="errorsRegistro.lastName" class="card-text"><small class="text-danger">{{errorsRegistro.lastName}}</small></p>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="email" placeholder="Ingresa tu email" type="email" class="form-control" id="email">
                    <p v-if="errorsRegistro.email" class="card-text"><small class="text-danger">{{errorsRegistro.email}}</small></p>
                </div>
                <div class="mb-3">
                    <label for="contrasena" class="form-label">Contraseña</label>
                    <input v-model="password" placeholder="Ingresa una contraseña" type="password" class="form-control" id="contrasena">
                    <p v-if="errorsRegistro.password" class="card-text"><small class="text-danger">{{errorsRegistro.password}}</small></p>
                </div>
                <div class="mb-3">
                    <label for="repetirContrasena" class="form-label">Repetir contraseña</label>
                    <input v-model="passwordRepeat" placeholder="Ingresa nuevamente la contraseña" type="password" class="form-control" id="repetirContrasena">
                    <p v-if="errorsRegistro.passwordRepeat" class="card-text"><small class="text-danger">{{errorsRegistro.passwordRepeat}}</small></p>
                </div>
                <div class="mb-3">
                    <input v-model="isAdmin" class="form-check-input" type="checkbox" id="admin" value="">
                    <label for="admin" class="form-check-label">Administrador</label>
                </div>
                <div class="d-flex justify-content-end">
                    <button @click="irALogin" type="button" class="btn btn-link">Volver al login</button>
                    <button type="submit" :disabled="showSuccessAlert"  class="btn btn-success">Registrarte</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'RegisterComponents',
    data() {
        return {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            passwordRepeat:'',
            isAdmin:false,
            showSuccessAlert:false,
            showDangerAlert:false,
            errorsRegistro:{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                passwordRepeat:''
            }
        }
    },
    watch:{
        firstName(nuevo){
            if(nuevo && this.errorsRegistro.firstName){
                this.errorsRegistro = {...this.errorsRegistro, firstName:''} 
            }
        },
        lastName(nuevo){
            if(nuevo && this.errorsRegistro.lastName){
                this.errorsRegistro = {...this.errorsRegistro, lastName:''} 
            }
        },
        email(nuevo){
            if(nuevo && this.errorsRegistro.email){
                this.errorsRegistro = {...this.errorsRegistro, email:''} 
            }
        },
        password(nuevo){
            if(nuevo && this.errorsRegistro.password){
                this.errorsRegistro = {...this.errorsRegistro, password:''} 
            }
        },
        passwordRepeat(nuevo){
            if(this.password !== nuevo){
                this.errorsRegistro = {...this.errorsRegistro, passwordRepeat:'La contraseña no coincide con la que ingresaste'}
            }else{
                this.errorsRegistro = {...this.errorsRegistro, passwordRepeat:''} 
            }
        }
    },
    methods:{
        ...mapActions('userModule',['saveUserRegister']),
        irALogin(){
            this.$router.push('/')
        },
        validarRegistro(){

            if((this.firstName && this.lastName && this.email && this.password && this.passwordRepeat) && (this.password === this.passwordRepeat)){
                const dataUser = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    isAdmin: this.isAdmin,
                }
                    this.saveUserRegister(dataUser)
                    .then(()=>{
                        this.showSuccessAlert=true
                        setTimeout(() => {
                            this.$router.push('/')
                            Object.assign(this.$data, this.$options.data())
                        }, 3000);
                    })
                    .catch(()=>{
                        this.showDangerAlert=true
                        setTimeout(() => {
                            Object.assign(this.$data, this.$options.data())
                        }, 3000);
                    })
            }

            if(!this.firstName){
                this.errorsRegistro = {...this.errorsRegistro, firstName:'Debes colocar tu nombre para poder registrarte'} 
            }

            if(!this.lastName){
                this.errorsRegistro = {...this.errorsRegistro, lastName:'Debes colocar tu apellido para poder registrarte'} 
            }

            if(!this.email){
                this.errorsRegistro = {...this.errorsRegistro, email:'Debes colocar un email para poder registrarte'} 
            }

            if(!this.password){
                this.errorsRegistro = {...this.errorsRegistro, password:'Debes colocar una contraseña para poder registrarte'} 
            }

            if(!this.passwordRepeat){
                this.errorsRegistro = {...this.errorsRegistro, passwordRepeat:'Debes repetir tu contraseña para poder registrarte'} 
            }

            if(this.password !== this.passwordRepeat){
                this.errorsRegistro = {...this.errorsRegistro, passwordRepeat:'La contraseña no coincide con la que ingresaste'} 
            }
        },
    },
}
</script>

<style scope>
.container-register{
    width: 100%;
    height: 100%;
}
</style>