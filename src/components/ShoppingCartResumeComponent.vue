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
                            <div class="d-flex flex-row">
                              <p class="pe-2">${{ item.price }}</p>
                              <p v-if="item.cant > 1"><small>x {{item.cant}}</small></p>
                            </div>
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
              <button :disabled="getShoppingCartList.length === 0" type="button" data-bs-toggle="modal" data-bs-target="#modalInfoEnvo" class="btn btn-success w-100">Finalizar compra</button>
              </div>
          </div>
          <div class="modal fade" tabindex="-1" id="modalInfoEnvo" aria-labelledby="modalInfoEnvoLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Datos de envio</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="col pb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input v-model="adress" type="text" class="form-control form-control-sm" id="direccion" aria-describedby="adressHelp">
                    <p v-if="errors.adress" class="card-text"><small class="text-danger">{{ errors.adress }}</small></p>
                </div>
                <div class="col">
                    <label for="telefono" class="form-label">Telefono</label>
                    <input v-model="phone" type="text" class="form-control form-control-sm" id="telefono" aria-describedby="adressHelp">
                    <p v-if="errors.phone" class="card-text"><small class="text-danger">{{ errors.phone }}</small></p>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
              <!--ver como hacer para que se cierre el modal cuando apreto enviar-->
              <button type="button" class="btn btn-success" @click="finalizarCompra">Finalizar</button>
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
            phone:'',
            errors:{
                adress:'',
                phone:''
            },
            showSuccessAlert:false,
            showDangerAlert:false,
        }
    },
    computed:{
        ...mapGetters('shoppingCartModule',['getShoppingCartList']),
        ...mapGetters('userModule',['getUserLogged']),
        calcularTotal(){
            let suma = this.getShoppingCartList.reduce((acum,data) =>{
                let prevSum=0
                if(data.cant >1){
                    prevSum = parseInt(data.price) * data.cant
                }else{
                    prevSum = parseInt(data.price)
                }
                return acum + prevSum
        },0)
            return suma
        }
    },
    watch:{
        adress(nuevo){
            if(nuevo && this.errors.adress){
                this.errors={...this.errors, adress:''}
            }
        },
        phone(nuevo){
            if(nuevo && this.errors.phone){
                this.errors={
                    ...this.errors, phone:''
                }
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

            if(!this.phone){
                this.errors={...this.errors, phone:'Ingresa un numero de telefono antes de finalizar'}
            }

            if(this.adress && this.phone){
                const dataAux = {
                    order: this.getShoppingCartList,
                    adress: this.adress,
                    phone: this.phone,
                    infoUser: this.getUserLogged.email,
                    total: this.calcularTotal
                }
                this.addNewItem(dataAux).then(()=>{
                    this.resetShoppingCart()
                    Object.assign(this.$data, this.$options.data())
                })
            }
        }
    }
}
</script>

<style>

</style>