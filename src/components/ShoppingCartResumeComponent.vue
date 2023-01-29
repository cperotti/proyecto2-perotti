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
              <h5 class="modal-title pe-3">Datos de envio</h5>
              <small>Todos los campos son obligatorios (*)</small>
              <button type="button" @click="limpiarModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="col pb-3">
                    <div class="d-flex flex-row">
                        <p class="pe-2"><strong class="text-danger">*</strong></p>
                        <label for="direccion" class="form-label">Dirección</label>
                    </div>
                    <input v-model="adress" placeholder="Ingresa una dirección" type="text" class="form-control form-control-sm" id="direccion" aria-describedby="adressHelp">
                </div>
                <div class="col">
                    <div class="d-flex flex-row">
                        <p class="pe-2"><strong class="text-danger">*</strong></p>
                        <label for="telefono" class="form-label">Teléfono</label>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">221</span>
                        <input v-model="phone" maxlength="7" placeholder="Ingrese un número" type="text" class="form-control form-control-sm" id="telefono" aria-describedby="adressHelp">
                    </div>
                    <p class="card-text"><small>Ingrese un número sin 15</small></p>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" @click="limpiarModal" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" :disabled="isDisabled" class="btn btn-success" @click="finalizarCompra" data-bs-dismiss="modal">Finalizar</button>
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
            showSuccessAlert:false,
            showDangerAlert:false,
            limitDigit:7,
        }
    },
    created(){
        const userId = localStorage.getItem('userId');
        this.fetchUserDetail(userId)
    },
    computed:{
        ...mapGetters('shoppingCartModule',['getShoppingCartList']),
        ...mapGetters('userModule',['getUserLogged']),
        isDisabled(){
            return !this.addNewItem || !this.phone || this.phone.length !== this.limitDigit
        },
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
    methods:{
        ...mapActions('ordersModule',['addNewItem']),
        ...mapMutations('shoppingCartModule',['resetShoppingCart']),
        ...mapActions('userModule', ['fetchUserDetail']),
        limpiarModal(){
            Object.assign(this.$data, this.$options.data())
        },
        finalizarCompra(){
            if(this.adress && this.phone){
                const dataAux = {
                    order: this.getShoppingCartList,
                    adress: this.adress,
                    phone: '221'+ this.phone,
                    infoUser: this.getUserLogged?.email,
                    total: this.calcularTotal
                }
                this.addNewItem(dataAux).then(()=>{
                    this.resetShoppingCart()
                    this.$emit('enviarDatosAlertResume', {message: 'Acabas de enviar tu pedido con éxito!', showDangerAlert:false, showSuccessAlert:true})
                    setTimeout(() => {
                        this.$emit('enviarDatosAlertResume', {message: '', showDangerAlert:false, showSuccessAlert:false})
                        Object.assign(this.$data, this.$options.data())
                    }, 3000);
                })
                .catch(()=>{
                    this.$emit('enviarDatosAlertResume', {message: 'Ocurrió un error al realizar el envio. Por favor volvé a intentarlo', showDangerAlert:true, showSuccessAlert:false})
                    setTimeout(() => {
                        this.$emit('enviarDatosAlertResume', {message: '', showDangerAlert:false, showSuccessAlert:false})
                        Object.assign(this.$data, this.$options.data())
                    }, 3000);
                })
            }
        }
    },
}
</script>

<style>

</style>