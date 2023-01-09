<template>
    <div>
        <div class="card">
              <div class="card-body">
              <h4 class="card-title">Resumen de compra</h4>
              <div class="card-text">
                  <div v-if="getShoppingCartList.length > 0" >
                      <div v-for="(item, index) in getShoppingCartList" :key="index" class="row">
                          <div class="col-8">
                              <p>{{ item.name }}</p>
                          </div>
                          <div class="col-4">
                              <p>${{ item.price }}</p>
                          </div>
                      </div>
                      <p>---------------------------------------------------</p>
                      <div class="row">
                          <div class="col-8">
                              <p><strong>Total</strong></p>
                          </div>
                          <div class="col-4">
                              <p>${{calcularTotal}}</p>
                          </div>
                      </div>
                  </div>
                  <div v-else>
                      <p>Aun no tenemos información para mostrar</p>
                  </div>
              </div>
              <button :disabled="getShoppingCartList.length === 0" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success w-100">Finalizar compra</button>
              </div>
          </div>
          <div class="modal" tabindex="-1" id="exampleModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Ingresar direccion</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Por favor, necesitamos que ingrese la direccion para enviar el pedido antes de finalizar la compra</p>
                <label for="direccion" class="form-label">Dirección</label>
                <input v-model="adress" type="text" class="form-control form-control-sm" id="nombreProducto" aria-describedby="adressHelp">
                <p v-if="errors.adress" class="card-text"><small class="text-danger">{{ errors.adress }}</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outlined-success" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal"  @click.prevent="finalizarCompra">Finalizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name:'ShoppingCartResumeComponent',
    data(){
        return{
            adress:'',
            errors:{
                adress:''
            }
        }
    },
    computed:{
        ...mapGetters('shoppingCartModule',['getShoppingCartList']),
        ...mapGetters('userModule',['getUserLogged']),
        calcularTotal(){
            let suma = this.getShoppingCartList.reduce((acum,data) =>
                acum + parseInt(data.price)
            ,0)
            return suma
        }
    },
    watch:{
        adress(nuevo){
            if(nuevo && this.errors.adress){
                this.errors={...this.errors, adress:''}
            }
        }
    },
    methods:{
        ...mapActions('ordersModule',['addNewItem']),
        ...mapMutations('shoppingCartModule',['resetShoppingCart']),
        finalizarCompra(){
            if(!this.adress){
                this.errors={...this.errors, adress:'Ingresa una direccion antes de finalizar'}
            }

            if(this.adress){
                const dataAux = {
                    order: this.getShoppingCartList,
                    adress: this.adress,
                    infoUser: this.getUserLogged.id,
                    delivered: false,
                    total: this.calcularTotal
                }
                this.addNewItem(dataAux)
                this.resetShoppingCart()
            }
        }
    }
}
</script>

<style>

</style>